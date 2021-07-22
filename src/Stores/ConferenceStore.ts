import { writable } from "svelte/store";
import type { jitsiConfig } from "../Components/Configs/JitsiConfig";
import type { youtubeConfig } from "../Components/Configs/YoutubeConfig";

/**
 * A store that contains the type of conference wanted and the configuration of the jitsi and the youtube
 * TypeConference :
 *  - 1 : Little conference, only jitsi
 *  - 2 : Big conference, jitsi on stage and youtube for audience
 */

interface TypeConference {
    typeConference : number,
    jitsi : jitsiConfig,
    youtube : youtubeConfig;
}

export const ConferenceStore = writable<TypeConference>(
    {
        typeConference: 1,
        jitsi : {
            nameSpace: 'jitsiAmphi/jitsiStage',
            roomName : "Amphi",
            url : '',
            audioMute : false,
            videoMute : false,
            adminTags : ["expert"],
        },
        youtube : {
            nameSpace : 'jitsiAmphi/jitsiYoutube',
            channelID : '',
            fullscreen : false,
            autoplay : true,
            pictureInPicture: false,
        }
    });