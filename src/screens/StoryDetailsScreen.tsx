import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSampleChapters } from '../data/sampleStories';
import type { ReadingTheme } from '../types/readingPreferences';
import type { Story } from '../types/story';

const colorsByTheme = {
  light: {
    background: '#FFF6F7',
    surface: '#FFFFFF',
    text: '#302C4D',
    muted: '#817B91',
    accent: '#D77E91',
    border: '#F0DDE3',
    placeholder: '#F4DDE4',
  },
  dark: {
    background: '#19192D',
    surface: '#24243D',
    text: '#F8F1F5',
    muted: '#C4BDCE',
    accent: '#F0A2B5',
    border: '#3B3654',
    placeholder: '#332D49',
  },
};

const bundledCovers: Record<string, number> = {
  'sample-the-words-i-couldnt-say': require('../../assets/sample-covers/the-words-i-coudnt-say.png'),
  'sample-kusina': require('../../assets/sample-covers/kusina.png'),
  'sample-finally': require('../../assets/sample-covers/finally.png'),
  'sample-read-me-when-you-need-me': require('../../assets/sample-covers/read-me-when-you-need-me.png'),
};

export function StoryDetailsScreen({
  story,
  theme,
  titleFontFamily,
  onRead,
  onBack,
}: {
  story: Story;
  theme: ReadingTheme;
  titleFontFamily: string;
  onRead: () => void;
  onBack: () => void;
}) {
  const colors = colorsByTheme[theme];
  const localCover = bundledCovers[story.id];
  const chapters = getSampleChapters(story.id);
  const coverSource = localCover ?? (story.coverUrl ? { uri: story.coverUrl } : null);

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
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Story details
        </Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View
          style={[
            styles.coverFrame,
            { backgroundColor: colors.placeholder, borderColor: colors.border },
          ]}
        >
          {coverSource ? (
            <Image
              source={coverSource}
              style={styles.cover}
              resizeMode="cover"
              accessibilityLabel={`${story.title} cover`}
            />
          ) : (
            <View style={styles.coverPlaceholder}>
              <Text
                style={[
                  styles.placeholderTitle,
                  { color: colors.text, fontFamily: titleFontFamily },
                ]}
              >
                {story.title}
              </Text>
            </View>
          )}
        </View>

        <Text style={[styles.genre, { color: colors.accent }]}>
          {story.genre}
        </Text>
        <Text
          style={[
            styles.title,
            { color: colors.text, fontFamily: titleFontFamily },
          ]}
        >
          {story.title}
        </Text>
        <Text style={[styles.author, { color: colors.muted }]}>
          by {story.authorName}
        </Text>
        <View style={[styles.rule, { backgroundColor: colors.border }]} />

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          About this story
        </Text>
        <Text style={[styles.description, { color: colors.muted }]}>
          {story.description || 'No description has been added for this story yet.'}
        </Text>

        {chapters ? (
          <Text style={[styles.chapterCount, { color: colors.muted }]}>
            {chapters.length} {chapters.length === 1 ? 'chapter' : 'chapters'}
          </Text>
        ) : null}

        {story.credits ? (
          <Text style={[styles.credits, { color: colors.muted }]}>
            Credits: {story.credits}
          </Text>
        ) : null}
      </ScrollView>

      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <Pressable
          accessibilityRole="button"
          onPress={onRead}
          style={[styles.readButton, { backgroundColor: colors.accent }]}
        >
          <Text style={styles.readButtonText}>Read story</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: {
    height: 56,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backButton: { minWidth: 76, paddingVertical: 10 },
  backText: { fontSize: 15, fontWeight: '700' },
  headerTitle: { fontSize: 15, fontWeight: '700' },
  headerSpacer: { minWidth: 76 },
  content: { alignItems: 'center', paddingHorizontal: 24, paddingTop: 24, paddingBottom: 28 },
  coverFrame: {
    width: 190,
    height: 270,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 22,
  },
  cover: { width: '100%', height: '100%' },
  coverPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  placeholderTitle: { fontSize: 22, lineHeight: 28, textAlign: 'center' },
  genre: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 28,
    lineHeight: 35,
    textAlign: 'center',
    marginTop: 8,
  },
  author: { fontSize: 14, marginTop: 8 },
  rule: { width: '100%', height: 1, marginVertical: 22 },
  sectionTitle: { alignSelf: 'stretch', fontSize: 18, fontWeight: '700' },
  description: {
    alignSelf: 'stretch',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 9,
  },
  chapterCount: { alignSelf: 'stretch', fontSize: 13, marginTop: 18 },
  credits: {
    alignSelf: 'stretch',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 16,
  },
  footer: { borderTopWidth: 1, paddingHorizontal: 20, paddingVertical: 12 },
  readButton: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  readButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
