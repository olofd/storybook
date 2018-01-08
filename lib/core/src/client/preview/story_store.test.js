import StoryStore from './story_store';

describe('preview.story_store', () => {
  describe('dumpStoryBook', () => {
    it('should return nothing when empty', () => {
      const store = new StoryStore();
      expect(store.dumpStoryBook()).toEqual([]);
    });

    it('should return storybook with stories', () => {
      const store = new StoryStore();

      const functions = {
        'story-1.1': () => 'story-1.1',
        'story-1.2': () => 'story-1.2',
        'story-2.1': () => 'story-2.1',
        'story-2.2': () => 'story-2.2',
      };
      store.addStory('kind-1', 'story-1.1', functions['story-1.1']);
      store.addStory('kind-1', 'story-1.2', functions['story-1.2']);
      store.addStory('kind-2', 'story-1.1', functions['story-1.1']);
      store.addStory('kind-2', 'story-1.2', functions['story-1.2']);

      expect(store.dumpStoryBook()).toEqual([
        {
          kind: 'kind-1',
          stories: [
            { name: 'story-1.1', render: functions['story-1.1'] },
            { name: 'story-1.2', render: functions['story-1.2'] },
          ],
        },
        {
          kind: 'kind-2',
          stories: [
            { name: 'story-2.1', render: functions['story-2.1'] },
            { name: 'story-2.2', render: functions['story-2.2'] },
          ],
        },
      ]);
    });

    // it('should return storybook with file names when module with file name provided', () => {
    //   const storyStore = new StoryStore();
    //   const api = new ClientAPI({ storyStore });
    //   const functions = {
    //     'story-1.1': () => 'story-1.1',
    //     'story-1.2': () => 'story-1.2',
    //     'story-2.1': () => 'story-2.1',
    //     'story-2.2': () => 'story-2.2',
    //   };
    //   const kind1 = api.storiesOf('kind-1', { filename: 'foo' });
    //   kind1.add('story-1.1', functions['story-1.1']);
    //   kind1.add('story-1.2', functions['story-1.2']);
    //   const kind2 = api.storiesOf('kind-2', { filename: 'bar' });
    //   kind2.add('story-2.1', functions['story-2.1']);
    //   kind2.add('story-2.2', functions['story-2.2']);
    //   const book = api.getStorybook();
    //   expect(book).toEqual([
    //     {
    //       kind: 'kind-1',
    //       fileName: 'foo',
    //       stories: [
    //         { name: 'story-1.1', render: functions['story-1.1'] },
    //         { name: 'story-1.2', render: functions['story-1.2'] },
    //       ],
    //     },
    //     {
    //       kind: 'kind-2',
    //       fileName: 'bar',
    //       stories: [
    //         { name: 'story-2.1', render: functions['story-2.1'] },
    //         { name: 'story-2.2', render: functions['story-2.2'] },
    //       ],
    //     },
    //   ]);
    // });
  });
});
