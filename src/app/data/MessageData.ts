import {P16} from "./P16";
import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {P29} from "./P29";
import {P32} from "./P32";
import {P226} from "./P226";
import {P52} from "./P52";
import {P73} from "./P73";
import {P91} from "./P91";
import {P93} from "./P93";
import {P111} from "./P111";
import {P101} from "./P101";
import {P128} from "./P128";
import {P137} from "./P137";
import {P154} from "./P154";
import {P162} from "./P162";
import {P164} from "./P164";
import {P180} from "./P180";
import {P186} from "./P186";
import {P193} from "./P193";
import {P201} from "./P201";
import {P227} from "./P227";
import {P245} from "./P245";

export const MESSAGE_CONTENT_DATA: { [key: string]: MessageContentList } = {
    'p16': P16,
    'p29': P29,
    'p32': P32,
    'p52': P52,
    'p73': P73,
    'p91': P91,
    'p93': P93,
    'p101': P101,
    'p111': P111,
    'p128': P128,
    'p137': P137,
    'p154': P154,
    'p162': P162,
    'p164': P164,
    'p180': P180,
    'p186': P186,
    'p193': P193,
    'p201': P201,
    'p226': P226,
    'p227': P227,
    'p245': P245,
};
