// src/services/providers.js
// Central place to check whether each external provider is configured.
// Commands should check these instead of throwing on an undefined API key,
// and should show: "❌ This feature is currently unavailable because its
// API provider is not configured." rather than crashing.
const config = require("../config/config");

function isOpenAIAvailable() { return !!config.openaiApiKey; }
function isAnthropicAvailable() { return !!config.anthropicApiKey; }
function isDeepSeekAvailable() { return !!config.deepseekApiKey; }
function isYouTubeAvailable() { return !!config.youtubeApiKey; }
function isImdbAvailable() { return !!config.imdbApiKey; }
function isTmdbAvailable() { return !!config.tmdbApiKey; }
function isRapidApiAvailable() { return !!config.rapidApiKey; }

// TikTok/Instagram: "available" here only means credentials are configured.
// It does NOT mean arbitrary-video-download works — see the TikTok/Instagram
// command files for the honest capability limitation.
function isTikTokAvailable() { return !!(config.tiktokClientKey && config.tiktokClientSecret); }
function isInstagramAvailable() { return !!(config.metaAppId && config.metaAppSecret && config.instagramAccessToken); }

const UNAVAILABLE_MESSAGE = "❌ This feature is currently unavailable because its API provider is not configured.";

module.exports = {
  isOpenAIAvailable,
  isAnthropicAvailable,
  isDeepSeekAvailable,
  isYouTubeAvailable,
  isImdbAvailable,
  isTmdbAvailable,
  isRapidApiAvailable,
  isTikTokAvailable,
  isInstagramAvailable,
  UNAVAILABLE_MESSAGE
};
