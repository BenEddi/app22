"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mentions_pipe_1 = require("./mentions.pipe");
const date_pipe_1 = require("./date.pipe");
const comments_pipe_1 = require("./comments.pipe");
const shares_pipe_1 = require("./shares.pipe");
exports.MODULE_PIPES = [
    mentions_pipe_1.MentionPipe,
    date_pipe_1.DatePipe,
    comments_pipe_1.CommentPipe,
    shares_pipe_1.SharePipe
];
//# sourceMappingURL=pipe.const.js.map