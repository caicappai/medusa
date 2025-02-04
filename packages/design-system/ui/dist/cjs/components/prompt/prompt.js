"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompt = void 0;
const tslib_1 = require("tslib");
const Primitives = tslib_1.__importStar(require("@radix-ui/react-alert-dialog"));
const React = tslib_1.__importStar(require("react"));
const button_1 = require("../button");
const heading_1 = require("../heading");
const clx_1 = require("../../utils/clx");
const PromptContext = React.createContext({
    variant: "danger",
});
const usePromptContext = () => {
    const context = React.useContext(PromptContext);
    if (!context) {
        throw new Error("usePromptContext must be used within a PromptProvider");
    }
    return context;
};
const PromptProvider = ({ variant, children }) => {
    return (React.createElement(PromptContext.Provider, { value: { variant } }, children));
};
/**
 * This component is based on the [Radix UI Alert Dialog](https://www.radix-ui.com/primitives/docs/components/alert-dialog) primitives.
 */
const Root = ({ 
/**
 * The variant of the prompt.
 */
variant = "danger", ...props }) => {
    return (React.createElement(PromptProvider, { variant: variant },
        React.createElement(Primitives.Root, { ...props })));
};
Root.displayName = "Prompt";
const Trigger = Primitives.Trigger;
Trigger.displayName = "Prompt.Trigger";
const Portal = (props) => {
    return React.createElement(Primitives.AlertDialogPortal, { ...props });
};
Portal.displayName = "Prompt.Portal";
const Overlay = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(Primitives.Overlay, { ref: ref, className: (0, clx_1.clx)("bg-ui-bg-overlay fixed inset-0", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props }));
});
Overlay.displayName = "Prompt.Overlay";
const Title = React.forwardRef(({ className, children, ...props }, ref) => {
    return (React.createElement(Primitives.Title, { ref: ref, className: (0, clx_1.clx)(className), ...props, asChild: true },
        React.createElement(heading_1.Heading, { level: "h2", className: "text-ui-fg-base" }, children)));
});
Title.displayName = "Prompt.Title";
const Content = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(Portal, null,
        React.createElement(Overlay, null),
        React.createElement(Primitives.Content, { ref: ref, className: (0, clx_1.clx)("bg-ui-bg-base shadow-elevation-flyout fixed left-[50%] top-[50%] flex w-full max-w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border focus-visible:outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200", className), ...props })));
});
Content.displayName = "Prompt.Content";
const Description = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(Primitives.Description, { ref: ref, className: (0, clx_1.clx)("text-ui-fg-subtle txt-compact-medium", className), ...props }));
});
Description.displayName = "Prompt.Description";
const Action = React.forwardRef(({ className, children, type, ...props }, ref) => {
    const { variant } = usePromptContext();
    return (React.createElement(Primitives.Action, { ref: ref, className: className, ...props, asChild: true },
        React.createElement(button_1.Button, { size: "small", type: type, variant: variant === "danger" ? "danger" : "primary" }, children)));
});
Action.displayName = "Prompt.Action";
const Cancel = React.forwardRef(({ className, children, ...props }, ref) => {
    return (React.createElement(Primitives.Cancel, { ref: ref, className: (0, clx_1.clx)(className), ...props, asChild: true },
        React.createElement(button_1.Button, { size: "small", variant: "secondary" }, children)));
});
Cancel.displayName = "Prompt.Cancel";
/**
 * This component is based on the `div` element and supports all of its props
 */
const Header = ({ className, ...props }) => {
    return (React.createElement("div", { className: (0, clx_1.clx)("flex flex-col gap-y-1 px-6 pt-6", className), ...props }));
};
Header.displayName = "Prompt.Header";
/**
 * This component is based on the `div` element and supports all of its props
 */
const Footer = ({ className, ...props }) => {
    return (React.createElement("div", { className: (0, clx_1.clx)("flex items-center justify-end gap-x-2 p-6", className), ...props }));
};
Footer.displayName = "Prompt.Footer";
const Prompt = Object.assign(Root, {
    Trigger,
    Content,
    Title,
    Description,
    Action,
    Cancel,
    Header,
    Footer,
});
exports.Prompt = Prompt;
//# sourceMappingURL=prompt.js.map