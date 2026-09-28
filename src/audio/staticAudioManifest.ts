/**
 * Empty for now. When pre-generated cloud-TTS audio files are added later, populate this map
 * (phraseId -> file URL under /audio/) and drop the files in public/audio/ — AudioResolver checks
 * here first and only falls back to live speechSynthesis when a phrase isn't listed. No lesson
 * content or player component needs to change either way.
 */
export const staticAudioManifest: Record<string, string> = {}
