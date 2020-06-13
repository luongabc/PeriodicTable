import React from 'react';
import * as firebase from 'firebase';
import {InteractionManager} from 'react-native'
var firebaseConfig = {
    apiKey: "AIzaSyDwU1iQvxEFn22IF9ScEZozSjtosqe24hM",
    authDomain: "periodictable-b751f.firebaseapp.com",
    databaseURL: "https://periodictable-b751f.firebaseio.com",
    projectId: "periodictable-b751f",
    storageBucket: "periodictable-b751f.appspot.com",
    messagingSenderId: "749957179479",
    appId: "1:749957179479:web:52d6bfaf23586b969d1b12",
    measurementId: "G-H4NJB6RQCS"
};
const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;

if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }
        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}
export const FirebaseApp=firebase.initializeApp(firebaseConfig);
