import { FIRST_ARRAY_ITEM } from 'constants/constants'
import { setCurrentVideoAC, videosReducer } from 'store/reducers/videos_reducer'
import { getVideosTC } from 'store/thunks/videos_thunks'
import { VideosInitialStateType } from 'store/types/VideosInitialStateType'
import { VideoType } from 'store/types/VideoType'

let initialState: VideosInitialStateType
let newVideos: VideoType[]
let currentVideoId: string

beforeEach(() => {
  currentVideoId = '2'

  initialState = {
    videos: [
      {
        uuid: currentVideoId,
        title: 'video test two',
        direction: {
          uuid: '123',
          name: 'SAGA',
        },
        difficulty: 'middle',
        description: 'asd',
        local_url: '/file/video?url=title(video_test_two).mp4',
        web_url: '',
        language: 'rus',
        tags: [
          {
            uuid: '1',
            name: 'newbies',
          },
          {
            uuid: '2',
            name: 'newbies2',
          },
        ],
      },
      {
        uuid: '10',
        title: 'video test two',
        direction: {
          uuid: '123',
          name: 'SAGA',
        },
        difficulty: 'middle',
        description: 'asd',
        local_url: '/file/video?url=title(video_test_two).mp4',
        web_url: '',
        language: 'rus',
        tags: [
          {
            uuid: '1',
            name: 'newbies',
          },
          {
            uuid: '2',
            name: 'newbies2',
          },
        ],
      },
    ],
    currentVideo: {
      uuid: '',
      title: '',
      direction: {
        uuid: '',
        name: '',
      },
      difficulty: '',
      description: 'asd',
      local_url: '',
      web_url: '',
      language: '',
      tags: [],
    },
  }

  newVideos = [
    {
      uuid: '1',
      title: 'video test two',
      direction: {
        uuid: '40',
        name: 'SAGA',
      },
      difficulty: 'middle',
      description: 'asd',
      local_url: '/file/video?url=title(video_test_two).mp4',
      web_url: '',
      language: 'rus',
      tags: [
        {
          uuid: '1',
          name: 'newbies',
        },
        {
          uuid: '2',
          name: 'newbies2',
        },
      ],
    },
    {
      uuid: '2',
      title: 'video test two',
      direction: {
        uuid: '40',
        name: 'SAGA',
      },
      difficulty: 'middle',
      description: 'asd',
      local_url: '/file/video?url=title(video_test_two).mp4',
      web_url: '',
      language: 'rus',
      tags: [
        {
          uuid: '1',
          name: 'newbies',
        },
        {
          uuid: '2',
          name: 'newbies2',
        },
      ],
    },
  ]
})

describe('tags reducer', () => {
  test('should set new videos', () => {
    const action = getVideosTC.fulfilled(newVideos, '')

    const endState = videosReducer(initialState, action)

    expect(endState.videos).toStrictEqual(newVideos)
  })

  test('should set current videos', () => {
    const action = setCurrentVideoAC(currentVideoId)

    const endState = videosReducer(initialState, action)

    expect(endState.currentVideo).toBe(initialState.videos[FIRST_ARRAY_ITEM])
  })
})
