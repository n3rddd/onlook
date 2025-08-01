import { Orientation, Theme } from './frame';
export const APP_NAME = 'Onlook';
export const APP_SCHEMA = 'onlook';
export const HOSTING_DOMAIN = 'onlook.live';
export const CUSTOM_OUTPUT_DIR = '.next-prod';
export const MAX_NAME_LENGTH = 50;

export enum EditorAttributes {
    // DOM attributes
    ONLOOK_TOOLBAR = 'onlook-toolbar',
    ONLOOK_RECT_ID = 'onlook-rect',
    ONLOOK_STYLESHEET_ID = 'onlook-stylesheet',
    ONLOOK_STUB_ID = 'onlook-drag-stub',
    ONLOOK_MOVE_KEY_PREFIX = 'olk-',
    OVERLAY_CONTAINER_ID = 'overlay-container',
    CANVAS_CONTAINER_ID = 'canvas-container',
    STYLESHEET_ID = 'onlook-default-stylesheet',

    // IDs
    DATA_ONLOOK_ID = 'data-oid',
    DATA_ONLOOK_INSTANCE_ID = 'data-oiid',
    DATA_ONLOOK_DOM_ID = 'data-odid',
    DATA_ONLOOK_COMPONENT_NAME = 'data-ocname',

    // Data attributes
    DATA_ONLOOK_IGNORE = 'data-onlook-ignore',
    DATA_ONLOOK_INSERTED = 'data-onlook-inserted',
    DATA_ONLOOK_DRAG_SAVED_STYLE = 'data-onlook-drag-saved-style',
    DATA_ONLOOK_DRAGGING = 'data-onlook-dragging',
    DATA_ONLOOK_DRAG_DIRECTION = 'data-onlook-drag-direction',
    DATA_ONLOOK_DRAG_START_POSITION = 'data-onlook-drag-start-position',
    DATA_ONLOOK_NEW_INDEX = 'data-onlook-new-index',
    DATA_ONLOOK_EDITING_TEXT = 'data-onlook-editing-text',
    DATA_ONLOOK_DYNAMIC_TYPE = 'data-onlook-dynamic-type',
    DATA_ONLOOK_CORE_ELEMENT_TYPE = 'data-onlook-core-element-type',
}

export const DefaultSettings = {
    SCALE: 0.7,
    PAN_POSITION: { x: 175, y: 100 },
    URL: 'http://localhost:3000/',
    FRAME_POSITION: { x: 0, y: 0 },
    FRAME_DIMENSION: { width: 1536, height: 960 },
    ASPECT_RATIO_LOCKED: false,
    DEVICE: 'Custom:Custom',
    THEME: Theme.System,
    ORIENTATION: Orientation.Portrait,
    MIN_DIMENSIONS: { width: '280px', height: '360px' },
    COMMANDS: {
        run: 'bun run dev',
        build: 'bun run build',
        install: 'bun install',
    },
    IMAGE_FOLDER: 'public',
    IMAGE_DIMENSION: { width: '100px', height: '100px' },
    FONT_FOLDER: 'fonts',
    FONT_CONFIG: 'app/fonts.ts',
    TAILWIND_CONFIG: 'tailwind.config.ts',
    CHAT_SETTINGS: {
        showSuggestions: true,
        autoApplyCode: true,
        expandCodeBlocks: false,
        showMiniChat: true,
    },
    EDITOR_SETTINGS: {
        shouldWarnDelete: false,
        enableBunReplace: true,
        buildFlags: '--no-lint',
    },
};

const isDev = process.env.NODE_ENV === 'development';
export const DEFAULT_COLOR_NAME = 'DEFAULT';

const CDN_PRELOAD_SCRIPT_SRC =
    'https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js';
export const LOCAL_PRELOAD_SCRIPT_SRC = `/onlook-preload-script.js`;
export const PRELOAD_SCRIPT_SRC = isDev ? LOCAL_PRELOAD_SCRIPT_SRC : CDN_PRELOAD_SCRIPT_SRC;

export const DEPRECATED_PRELOAD_SCRIPT_SRCS = [
    'https://cdn.jsdelivr.net/gh/onlook-dev/web@latest/apps/web/preload/dist/index.js',
    'https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/packages/preload/dist/index.js',
    'https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/preload/dist/index.js',
    // Intentionally reversed to deprecate non-preferred (local in prod, CDN in dev) usage.
    isDev ? CDN_PRELOAD_SCRIPT_SRC : LOCAL_PRELOAD_SCRIPT_SRC,
];
