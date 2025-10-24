# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-01

### Added
- Initial release of Runpod Public Endpoints n8n Community Node
- Dynamic model discovery via GraphQL API
- Smart model categorization (Text/Image/Video/Audio)
- Support for all Runpod Public Endpoint operations:
  - Generate Text (Granite, Qwen3, Deep Cogito, InfiniteTalk)
  - Generate Image (Flux, Qwen Image, Seedream, Nano Banana Edit)
  - Generate Video (Sora, WAN, Seedance, Kling)
  - Generate Audio (Whisper, Minimax)
  - Get Status (async job monitoring)
- Built-in JSON examples for each model type
- 5-minute caching for improved performance
- Fallback to hardcoded models if API fails
- Custom Runpod cube icon
- Comprehensive documentation and example workflows
- Secure API key credential management
- Async operation support with configurable polling
- Error handling with user-friendly messages

### Features
- **Dynamic Model Discovery**: Automatically fetches available models
- **Smart Categorization**: Models filtered by operation type
- **Performance Optimized**: Intelligent caching reduces API calls
- **Robust Error Handling**: Graceful fallbacks and clear error messages
- **Clean UI**: Intuitive interface with built-in examples
- **Secure Authentication**: API keys stored securely in n8n credentials

### Technical Details
- TypeScript implementation
- n8n Community Node standards compliance
- GraphQL API integration for model discovery
- Exponential backoff for async polling
- Comprehensive error handling
- Full TypeScript type definitions

---

## Future Releases

### Planned Features
- Binary data download support
- Additional model parameter validation
- Enhanced error recovery mechanisms
- Performance monitoring and metrics
- Advanced caching strategies
