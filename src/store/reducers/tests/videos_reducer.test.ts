import { videosReducer } from 'store/reducers/videos_reducer'
import { getVideosTC } from 'store/thunks/videos_thunks'
import { VideosInitialStateType } from 'store/types/VideosInitialStateType'
import { VideoType } from 'store/types/VideoType'

let initialState: VideosInitialStateType
let newVideos: VideoType[]

beforeEach(() => {
  initialState = {
    videos: [],
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
      local_url: '/file/video?url=title(video_test_two).mp4',
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
      local_url: '/file/video?url=title(video_test_two).mp4',
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
})
