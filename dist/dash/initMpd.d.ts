import { BaseURL, Initialization, Mpd, MpdFile, Representation, SegmentBase, SegmentList, SegmentURL, AdaptationSet, SegmentTemplate, Period } from "../types/MpdFile";
export declare function initMpdFile(mpd: Document): MpdFile;
export declare function initMpd(mpd: Element): Mpd;
export declare function initPeriod(period: Element): Period;
export declare function initAdaptationSet(adaptationSet: Element): AdaptationSet | never;
export declare function initRepresentation(representation: Element): Representation | never;
export declare function initSegmentTemplate(segmentTemplate: Element): SegmentTemplate;
export declare function initSegmentBase(segmentBase: Element): SegmentBase | never;
export declare function initSegmentList(segmentList: Element): SegmentList | never;
export declare function initInitialization(initialization: Element): Initialization;
export declare function initSegmentURL(segmentURL: Element): SegmentURL | never;
export declare function initBaseURL(baseURL: Element): BaseURL;
