import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type ScrollViewInstance,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useReadingPreferences } from '../hooks/useReadingPreferences';
import { useStoryChapters } from '../hooks/useStoryChapters';
import {
  MAX_READING_FONT_SIZE,
  MIN_READING_FONT_SIZE,
  type ReadingTheme,
} from '../types/readingPreferences';
import type { Story } from '../types/story';

const readerColors = {
  light: {
    background: '#FFF6F7',
    surface: '#FFFFFF',
    text: '#302C4D',
    muted: '#817B91',
    accent: '#C96980',
    border: '#F0DDE3',
    error: '#A52B45',
  },
  dark: {
    background: '#19192D',
    surface: '#24243D',
    text: '#F8F1F5',
    muted: '#C4BDCE',
    accent: '#F0A2B5',
    border: '#3B3654',
    error: '#FF9AAA',
  },
};

function ReaderButton({
  label,
  onPress,
  disabled,
  theme,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  theme: ReadingTheme;
}) {
  const colors = readerColors[theme];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.controlButton,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          opacity: disabled ? 0.45 : 1,
        },
      ]}
    >
      <Text style={[styles.controlButtonText, { color: colors.text }]}>
        {label}
      </Text>
    </Pressable>
  );
}

export function ReaderScreen({
  story,
  onBack,
  titleFontFamily,
  readingFontFamily,
}: {
  story: Story;
  onBack: () => void;
  titleFontFamily: string;
  readingFontFamily: string;
}) {
  const { preferences, updatePreferences } = useReadingPreferences();
  const { chapters, loading, error, retry } = useStoryChapters(story.id);
  const [chapterIndex, setChapterIndex] = useState(0);
  const scrollRef = useRef<ScrollViewInstance | null>(null);
  const colors = readerColors[preferences.theme];
  const chapter = chapters[chapterIndex];

  useEffect(() => {
    setChapterIndex((current) =>
      Math.min(current, Math.max(0, chapters.length - 1)),
    );
  }, [chapters.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [chapterIndex]);

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
      edges={['top', 'left', 'right']}
    >
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back to stories"
          onPress={onBack}
          style={styles.backButton}
        >
          <Text style={[styles.backText, { color: colors.accent }]}>
            ‹ Stories
          </Text>
        </Pressable>
        <View style={styles.headerControls}>
          <ReaderButton
            label="A−"
            theme={preferences.theme}
            disabled={preferences.fontSize <= MIN_READING_FONT_SIZE}
            onPress={() =>
              updatePreferences({
                fontSize: Math.max(
                  MIN_READING_FONT_SIZE,
                  preferences.fontSize - 1,
                ),
              })
            }
          />
          <Text style={[styles.fontSizeLabel, { color: colors.muted }]}>
            {preferences.fontSize}
          </Text>
          <ReaderButton
            label="A+"
            theme={preferences.theme}
            disabled={preferences.fontSize >= MAX_READING_FONT_SIZE}
            onPress={() =>
              updatePreferences({
                fontSize: Math.min(
                  MAX_READING_FONT_SIZE,
                  preferences.fontSize + 1,
                ),
              })
            }
          />
          <ReaderButton
            label={preferences.theme === 'dark' ? '☀' : '☾'}
            theme={preferences.theme}
            onPress={() =>
              updatePreferences({
                theme: preferences.theme === 'dark' ? 'light' : 'dark',
              })
            }
          />
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Text
          style={[
            styles.storyTitle,
            { color: colors.muted, fontFamily: titleFontFamily },
          ]}
        >
          {story.title}
        </Text>
        <Text style={[styles.author, { color: colors.muted }]}>
          by {story.authorName}
        </Text>
        {story.credits ? (
          <Text style={[styles.credits, { color: colors.muted }]}>
            Credits: {story.credits}
          </Text>
        ) : null}

        {loading ? (
          <View style={styles.message}>
            <ActivityIndicator color={colors.accent} />
            <Text style={[styles.messageText, { color: colors.muted }]}>
              Loading chapters…
            </Text>
          </View>
        ) : error ? (
          <View
            accessibilityRole="alert"
            style={[styles.messageCard, { borderColor: colors.border }]}
          >
            <Text style={[styles.messageHeading, { color: colors.error }]}>
              Could not load chapters
            </Text>
            <Text style={[styles.messageText, { color: colors.muted }]}>
              {error.message}
            </Text>
            <Pressable
              accessibilityRole="button"
              onPress={retry}
              style={[styles.retryButton, { backgroundColor: colors.accent }]}
            >
              <Text style={styles.retryText}>Try again</Text>
            </Pressable>
          </View>
        ) : chapters.length === 0 ? (
          <View style={[styles.messageCard, { borderColor: colors.border }]}>
            <Text style={[styles.messageHeading, { color: colors.text }]}>
              No chapters yet
            </Text>
            <Text style={[styles.messageText, { color: colors.muted }]}>
              Chapters added to this story will show up here.
            </Text>
          </View>
        ) : chapter ? (
          <>
            <Text style={[styles.chapterCount, { color: colors.accent }]}>
              CHAPTER {chapterIndex + 1} OF {chapters.length}
            </Text>
            <Text
              style={[
                styles.chapterTitle,
                { color: colors.text, fontFamily: titleFontFamily },
              ]}
            >
              {chapter.title}
            </Text>
            <Text
              selectable
              style={[
                styles.chapterContent,
                {
                  color: colors.text,
                  fontSize: preferences.fontSize,
                  lineHeight: Math.round(preferences.fontSize * 1.75),
                  fontFamily: readingFontFamily,
                },
              ]}
            >
              {chapter.content}
            </Text>
          </>
        ) : null}
      </ScrollView>

      {!loading && !error && chapters.length > 0 ? (
        <View
          style={[
            styles.navigation,
            { borderTopColor: colors.border, backgroundColor: colors.background },
          ]}
        >
          <ReaderButton
            label="Previous"
            theme={preferences.theme}
            disabled={chapterIndex === 0}
            onPress={() =>
              setChapterIndex((current) => Math.max(0, current - 1))
            }
          />
          <Text style={[styles.chapterPosition, { color: colors.muted }]}>
            {chapterIndex + 1} / {chapters.length}
          </Text>
          <ReaderButton
            label="Next"
            theme={preferences.theme}
            disabled={chapterIndex >= chapters.length - 1}
            onPress={() =>
              setChapterIndex((current) =>
                Math.min(chapters.length - 1, current + 1),
              )
            }
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: {
    minHeight: 58,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: { paddingVertical: 10, paddingRight: 8 },
  backText: { fontSize: 16, fontWeight: '700' },
  headerControls: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  controlButton: {
    minWidth: 42,
    minHeight: 38,
    borderWidth: 1,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 9,
  },
  controlButtonText: { fontSize: 13, fontWeight: '700' },
  fontSizeLabel: { minWidth: 18, textAlign: 'center', fontSize: 12 },
  scrollView: { flex: 1 },
  content: { paddingHorizontal: 25, paddingTop: 28, paddingBottom: 36 },
  storyTitle: { fontSize: 13, fontWeight: '700' },
  author: { fontSize: 12, marginTop: 5 },
  credits: { fontSize: 11, lineHeight: 16, marginTop: 5 },
  chapterCount: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    marginTop: 38,
  },
  chapterTitle: {
    fontSize: 27,
    lineHeight: 32,
    marginTop: 10,
    marginBottom: 24,
  },
  chapterContent: { lineHeight: 31 },
  message: { alignItems: 'center', gap: 12, paddingVertical: 50 },
  messageCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginTop: 32,
  },
  messageHeading: { fontSize: 16, fontWeight: '700' },
  messageText: { fontSize: 14, lineHeight: 21, marginTop: 8 },
  retryButton: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginTop: 14,
  },
  retryText: { color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
  navigation: {
    borderTopWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chapterPosition: { fontSize: 13, fontWeight: '600' },
});
