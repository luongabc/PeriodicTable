import {FirebaseApp} from './FirebaseConfig';

export const getData=async ()=>{
    var arr=[];
    await FirebaseApp.database().ref("table").once('value').then(snapshot=>{
        arr=Object.values(snapshot.val());
    }) ;
    return arr;
};