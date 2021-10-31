import { Alert } from "./alerts"
import {storage} from '../firebase'
export async function imageUpload(file, path) {
    console.log(file)
    if((file.size/1024) > 1024) return Alert("Image size cannot be more than 1MB", "error");
    debugger
    if(!file.type.includes("image")) return Alert("Only Images can be uploaded", "error");
    try{
        if (file === "") return
        const uploadTask = storage
          .ref(`/${path}/${file.name}`)
          .put(file);
        await uploadTask.on(
          "state_changed",
          (snapShot) => {
            //takes a snap shot of the process as it is happening
            console.log(snapShot);
          },
          (err) => {
            //catches the errors
            console.log(err);
          });
       const imageUrl = await storage.ref(path).child(file.name).getDownloadURL()
       console.log(imageUrl)
       return imageUrl;
    }catch(e){
        console.log(e)
    }
}

export const Days = [ 
    { id: 'allDays', day: 'All Days', status: false },
    { id: 'Sun', day: 'Sun', status: false },
    { id: 'Mon', day: 'Mon', status: false },
    { id: 'Tue', day: 'Tue', status: false },
    { id: 'Wed', day: 'Wed', status: false },
    { id: 'Thu', day: 'Thu', status: false },
    { id: 'Fri', day: 'Fri', status: false },
    { id: 'Sat', day: 'Sat', status: false }
]