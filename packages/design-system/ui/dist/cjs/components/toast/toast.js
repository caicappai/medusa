"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
const tslib_1 = require("tslib");
const icons_1 = require("@medusajs/icons");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const sonner_1 = require("sonner");
const icon_button_1 = require("../icon-button");
/**
 * This component is based on the [Sonner](https://sonner.emilkowal.ski/toast) toast library.
 */
const Toast = ({ 
/**
 * Optional ID of the toast.
 */
id, 
/**
 * @ignore
 *
 * @privateRemarks
 * As the Toast component is created using
 * the `toast` utility functions, the variant is inferred
 * from the utility function.
 */
variant = "info", 
/**
 * @ignore
 *
 * @privateRemarks
 * The `toast` utility functions accept this as a parameter.
 */
title, 
/**
 * @ignore
 *
 * @privateRemarks
 * The `toast` utility functions accept this as a parameter.
 */
icon: _icon, 
/**
 * The toast's text.
 */
description, 
/**
 * The toast's action buttons.
 */
action, 
/**
 * @ignore
 *
 * @privateRemarks
 * The `toast` utility functions accept this as a parameter.
 */
dismissable = true, }) => {
    let icon = _icon;
    if (!_icon) {
        switch (variant) {
            case "success":
                icon = React.createElement(icons_1.CheckCircleSolid, { className: "text-ui-tag-green-icon" });
                break;
            case "warning":
                icon = React.createElement(icons_1.ExclamationCircleSolid, { className: "text-ui-tag-orange-icon" });
                break;
            case "error":
                icon = React.createElement(icons_1.XCircleSolid, { className: "text-ui-tag-red-icon" });
                break;
            case "loading":
                icon = React.createElement(icons_1.Spinner, { className: "text-ui-tag-blue-icon animate-spin" });
                break;
            case "info":
                icon = React.createElement(icons_1.InformationCircleSolid, { className: "text-ui-fg-base" });
                break;
            default:
                break;
        }
    }
    return (React.createElement("div", { className: "shadow-elevation-flyout bg-ui-bg-component flex w-fit min-w-[360px] max-w-[440px] gap-x-3 overflow-hidden rounded-lg p-3" },
        React.createElement("div", { className: (0, clx_1.clx)("grid flex-1 items-center gap-x-2", {
                "grid-cols-[20px_1fr]": !!icon,
                "grid-cols-1": !icon,
                "items-start": !!description,
            }) },
            !!icon && (React.createElement("span", { className: "flex size-5 items-center justify-center", "aria-hidden": true }, icon)),
            React.createElement("div", { className: "flex flex-col gap-y-3" },
                React.createElement("div", { className: "flex flex-col" },
                    React.createElement("span", { className: "txt-compact-small-plus text-ui-fg-base" }, title),
                    description && (React.createElement("span", { className: "txt-small text-ui-fg-subtle text-pretty" }, description))),
                !!action && (React.createElement("button", { type: "button", className: (0, clx_1.clx)("txt-compact-small-plus text-ui-fg-base bg-ui-bg-base flex w-fit items-center rounded-[4px] transition-colors", "focus-visible:shadow-borders-focus", "hover:text-ui-fg-subtle", "disabled:text-ui-fg-disabled", {
                        "text-ui-fg-error": action.variant === "destructive",
                    }), onClick: action.onClick }, action.label)))),
        !!dismissable && (React.createElement(icon_button_1.IconButton, { size: "2xsmall", variant: "transparent", type: "button", onClick: () => sonner_1.toast.dismiss(id) },
            React.createElement(icons_1.XMark, null)))));
};
exports.Toast = Toast;
//# sourceMappingURL=toast.js.map