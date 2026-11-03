import { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStories } from '../hooks/useStories';
import type { ReadingTheme } from '../types/readingPreferences';
import type { Story } from '../types/story';

const palette = {
  light: {
    background: '#FFF6F7',
    surface: '#FFFFFF',
    text: '#302C4D',
    muted: '#817B91',
    accent: '#D77E91',
    accentSoft: '#FBE6EC',
    border: '#F0DDE3',
    placeholder: '#F4DDE4',
    error: '#A52B45',
  },
  dark: {
    background: '#19192D',
    surface: '#24243D',
    text: '#F8F1F5',
    muted: '#C4BDCE',
    accent: '#F0A2B5',
    accentSoft: '#3A2D48',
    border: '#3B3654',
    placeholder: '#332D49',
    error: '#FF9AAA',
  },
};

const coverPalettes = [
  { background: '#F0CDD4', foreground: '#754254', detail: '#D78698' },
  { background: '#D6D4EB', foreground: '#42416A', detail: '#9694C4' },
  { background: '#F2DFCA', foreground: '#795536', detail: '#D7A66E' },
  { background: '#CEDFD9', foreground: '#345A52', detail: '#7DADA0' },
];
const sampleCoverImages: Record<string, number> = {
  'sample-the-words-i-couldnt-say': require('../../assets/sample-covers/the-words-i-coudnt-say.png'),
  'sample-kusina': require('../../assets/sample-covers/kusina.png'),
  'sample-finally': require('../../assets/sample-covers/finally.png'),
   'sample-read-me-when-you-need-me': require('../../assets/sample-covers/read-me-when-you-need-me.png'),
};
const STORY_GRID_COLUMNS = 2;

function StoryCard({
  story,
  theme,
  onPress,
  titleFontFamily,
}: {
  story: Story;
  theme: ReadingTheme;
  onPress: () => void;
  titleFontFamily: string;
}) {
  const colors = palette[theme];
  const [coverFailed, setCoverFailed] = useState(false);
  useEffect(() => {
    setCoverFailed(false);
  }, [story.id, story.coverUrl]);
  const coverSource =
    sampleCoverImages[story.id] ??
    (story.coverUrl ? { uri: story.coverUrl } : undefined);
  const coverPalette =
    coverPalettes[
      story.id.split('').reduce((sum, character) => sum + character.charCodeAt(0), 0) %
        coverPalettes.length
    ];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`View details for ${story.title} by ${story.authorName}`}
      onPress={onPress}
      style={[
        styles.storyCard,
        { backgroundColor: colors.surface },
      ]}
    >
      <View style={[styles.coverFrame, { backgroundColor: colors.placeholder }]}>
        {coverSource && !coverFailed ? (
          <Image
            source={coverSource}
            style={styles.coverImage}
            resizeMode="cover"
            onError={() => setCoverFailed(true)}
            accessibilityLabel={`${story.title} cover`}
          />
        ) : (
          <View
            style={[
              styles.coverArtwork,
              { backgroundColor: coverPalette.background },
            ]}
          >
            <View
              style={[styles.coverRule, { backgroundColor: coverPalette.detail }]}
            />
            <Text style={[styles.coverBrand, { color: coverPalette.foreground }]}>
              A LOVE STORY
            </Text>
            <Text
              numberOfLines={4}
              style={[
                styles.coverTitle,
                {
                  color: coverPalette.foreground,
                  fontFamily: titleFontFamily,
                },
              ]}
            >
              {story.title}
            </Text>
            <View
              style={[
                styles.coverRule,
                styles.coverBottomRule,
                { backgroundColor: coverPalette.detail },
              ]}
            />
          </View>
        )}
      </View>
      <View style={styles.storyDetails}>
        <Text style={[styles.genre, { color: colors.accent }]}>
          {story.genre}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.storyTitle, { color: colors.text, fontFamily: titleFontFamily }]}
        >
          {story.title}
        </Text>
        <Text numberOfLines={1} style={[styles.author, { color: colors.muted }]}>
          by {story.authorName}
        </Text>
      </View>
    </Pressable>
  );
}

export function HomeScreen({
  theme,
  onToggleTheme,
  onSelectStory,
  titleFontFamily,
}: {
  theme: ReadingTheme;
  onToggleTheme: () => void;
  onSelectStory: (story: Story) => void;
  titleFontFamily: string;
}) {
  const colors = palette[theme];
  const { stories, loading, error, retry } = useStories();
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = useMemo(
    () => ['All', ...Array.from(new Set(stories.map((story) => story.genre))).sort()],
    [stories],
  );

  const visibleStories = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase();
    return stories.filter((story) => {
      const matchesGenre =
        selectedGenre === 'All' || story.genre === selectedGenre;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        story.title.toLocaleLowerCase().includes(normalizedSearch) ||
        story.authorName.toLocaleLowerCase().includes(normalizedSearch);
      return matchesGenre && matchesSearch;
    });
  }, [search, selectedGenre, stories]);

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
      edges={['top', 'left', 'right']}
    >
      <FlatList
        key={`story-grid-${STORY_GRID_COLUMNS}`}
        data={visibleStories}
        numColumns={STORY_GRID_COLUMNS}
        keyExtractor={(story) => story.id}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <View style={styles.topBar}>
              <Image
                source={
                  theme === 'dark'
                    ? require('../../assets/lovestorya-wordmark-dark.png')
                    : require('../../assets/lovestorya-wordmark.png')
                }
                accessibilityRole="image"
                accessibilityLabel="LoveStorya"
                resizeMode="contain"
                style={styles.brandLogo}
              />
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                onPress={onToggleTheme}
                style={[
                  styles.themeButton,
                  { backgroundColor: colors.surface, borderColor: colors.border },
                ]}
              >
                <Text style={[styles.themeButtonText, { color: colors.text }]}>
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </Text>
              </Pressable>
            </View>
            <TextInput
              accessibilityLabel="Search stories by title or author"
              placeholder="Search stories or authors"
              placeholderTextColor={colors.muted}
              value={search}
              onChangeText={setSearch}
              returnKeyType="search"
              style={[
                styles.searchInput,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
            />
            <View style={styles.sectionHeading}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: colors.text, fontFamily: titleFontFamily },
                ]}
              >
                Recently updated
              </Text>
              <Text style={[styles.storyCount, { color: colors.muted }]}>
                {stories.length} {stories.length === 1 ? 'story' : 'stories'}
              </Text>
            </View>
            <FlatList
              horizontal
              data={genres}
              keyExtractor={(genre) => genre}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.genreList}
              renderItem={({ item }) => {
                const selected = item === selectedGenre;
                return (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{ selected }}
                    onPress={() => setSelectedGenre(item)}
                    style={[
                      styles.genreChip,
                      {
                        backgroundColor: selected
                          ? colors.accentSoft
                          : colors.surface,
                        borderColor: selected ? colors.accent : colors.border,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color: selected ? colors.accent : colors.muted,
                        fontWeight: selected ? '700' : '500',
                      }}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              }}
            />
            {error ? (
              <View
                accessibilityRole="alert"
                style={[
                  styles.messageCard,
                  { backgroundColor: colors.surface, borderColor: colors.border },
                ]}
              >
                <Text style={[styles.messageTitle, { color: colors.error }]}>
                  Could not load stories
                </Text>
                <Text style={[styles.messageBody, { color: colors.muted }]}>
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
            ) : null}
          </View>
        }
        renderItem={({ item }) => (
          <StoryCard
            story={item}
            theme={theme}
            titleFontFamily={titleFontFamily}
            onPress={() => onSelectStory(item)}
          />
        )}
        ListEmptyComponent={
          error ? (
            <View />
          ) : loading ? (
            <View style={styles.emptyState}>
              <ActivityIndicator color={colors.accent} />
              <Text style={[styles.emptyText, { color: colors.muted }]}>
                Finding stories for you…
              </Text>
            </View>
          ) : stories.length === 0 ? (
            <View
              style={[
                styles.messageCard,
                { backgroundColor: colors.surface, borderColor: colors.border },
              ]}
            >
              <Text style={[styles.messageTitle, { color: colors.text }]}>
                Your library starts here
              </Text>
              <Text style={[styles.messageBody, { color: colors.muted }]}>
                No published stories yet. Add a story document to the{' '}
                <Text style={{ fontWeight: '700' }}>stories</Text> collection in
                Firestore to see it here.
              </Text>
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Text style={[styles.emptyText, { color: colors.muted }]}>
                No stories match your search.
              </Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  listContent: { paddingHorizontal: 18, paddingBottom: 28 },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  brandLogo: { width: 210, height: 52 },
  themeButton: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  themeButtonText: { fontSize: 13, fontWeight: '700' },
  subtitle: { fontSize: 13, marginTop: 10, marginBottom: 20 },
  searchInput: {
    height: 48,
    borderWidth: 0,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  sectionHeading: {
    marginTop: 25,
    marginBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: { fontSize: 18, fontWeight: '700' },
  storyCount: { fontSize: 12 },
  genreList: { gap: 8, paddingBottom: 18 },
  genreChip: {
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  storyCard: {
    flex: 1,
    minWidth: 0,
    marginHorizontal: 6,
    marginBottom: 18,
    borderRadius: 16,
    padding: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#4B3040',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  coverFrame: {
    width: '100%',
    aspectRatio: 0.72,
    borderRadius: 11,
    overflow: 'hidden',
  },
  coverImage: { width: '100%', height: '100%' },
  coverArtwork: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 18,
  },
  coverRule: { width: '48%', height: 1, opacity: 0.55 },
  coverBottomRule: { marginTop: 14 },
  coverBrand: {
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.7,
    marginTop: 13,
  },
  coverTitle: {
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 10,
  },
  storyDetails: { paddingHorizontal: 4, paddingTop: 10, paddingBottom: 5 },
  genre: { fontSize: 9, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1 },
  storyTitle: {
    fontSize: 14,
    marginTop: 4,
  },
  author: { fontSize: 11, marginTop: 4 },
  messageCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginTop: 8,
  },
  messageTitle: { fontSize: 16, fontWeight: '700' },
  messageBody: { fontSize: 13, lineHeight: 19, marginTop: 7 },
  retryButton: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginTop: 14,
  },
  retryText: { color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
  emptyState: { paddingVertical: 36, alignItems: 'center', gap: 10 },
  emptyText: { fontSize: 14, textAlign: 'center' },
});
