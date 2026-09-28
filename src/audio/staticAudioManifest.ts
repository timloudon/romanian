/**
 * Empty for now. When pre-generated cloud-TTS audio files are added later, populate this map
 * (phraseId -> path *relative to the app base*, e.g. "audio/u01-l01-d01-answer.mp3") and drop
 * the files in public/audio/ — AudioResolver prefixes the base URL and checks here first, only
 * falling back to live speechSynthesis when a phrase isn't listed. No lesson content or player
 * component needs to change either way.
 */
export const staticAudioManifest: Record<string, string> = {}
