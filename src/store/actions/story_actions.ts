import axios from 'axios';
import {
    AddStoryType,
    IStoryData, 
    STORY_ADD, 
    STORY_CLEAR, 
    STORY_GET, 
    STORY_UPDATE,
    STORIES_GET
} from '../reducers/TypesForStory';

  
// type loginUserType = {type: typeof USER_LOGIN, payload: loginUserData | Promise<any>}

// export function loginUser2({email, password}:IloginUser):loginUserType {
//     const request = axios.post('http://localhost:3000/login', {email, password})
//     .then((request) => request.data)

//     return {
//         type: USER_LOGIN,
//         payload: request
//     }
// }

type GetStoriesType = {
    type: typeof STORIES_GET
    payload: Promise<Array<IStoryData>>
}

export function getStories(
    limit: number,
    start: number = 0,
    order: string = 'asc',
    list?: Array<Object>
):GetStoriesType {
    const request = axios.get(`/api/stories/all_stories?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => { 
        return list ? [...list,...response.data] : response.data
    })

    return {
        type: STORIES_GET,
        payload: request
    }
}

export function addStory(story:IStoryData):AddStoryType {
    const request = axios.post('/api/stories/story', story)
    .then((response) => {return response.data})
    
    return {
        type: STORY_ADD,
        payload: request
    }
}

export function updateStory(story:IStoryData):AddStoryType {
    const request = axios.patch('/api/stories/story', story)
    .then((response) => {return response.data})
    .catch((err)=> {
        return false
    })
    
    return {
        type: STORY_UPDATE,
        payload: request
    }
}

export function getStory(storyId:string):AddStoryType {
    const request = axios.get(`/api/stories/story?id=${storyId}`)
    .then((response) => {return response.data})
    .catch((err)=> {
        return false
    })
    
    return {
        type: STORY_GET,
        payload: request
    }
}

export function clearStory():AddStoryType | {type: typeof STORY_CLEAR, payload: null } {
    return {
        type: STORY_CLEAR,
        payload: null
    }
}