import React from "react";
import PropTypes from "prop-types";

function Button({
  showIconLeft = false,
  iconLeft = null,
  title = "Button",
  icon = null,
  showIcon = true,
  type = "primary",
  size = "default",
  state = "default",
  content = "default",
  danger = "false",
  ghost = "false",
}) {
  return (
    <div
      className="relative rounded-md size-full"
      data-name="type=primary, size=default, state=default, content=default, danger=false, ghost=false"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-1 relative size-full">
          <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
            <p className="block leading-[22px] whitespace-pre">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Button.propTypes = {
  showIconLeft: PropTypes.bool,
  iconLeft: PropTypes.node,
  title: PropTypes.string,
  icon: PropTypes.node,
  showIcon: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "default", "dashed", "text", "link"]),
  size: PropTypes.oneOf(["default", "large", "small"]),
  state: PropTypes.oneOf(["default", "disabled", "focus", "hover", "pressed"]),
  content: PropTypes.oneOf(["default", "icon"]),
  danger: PropTypes.oneOf(["false", "true"]),
  ghost: PropTypes.oneOf(["false", "true"]),
};

export default function Frame50Popup() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shadow-[0px_9px_28px_8px_rgba(0,0,0,0.05),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_6px_16px_0px_rgba(0,0,0,0.08)] w-[400px] mx-auto mt-20">
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-5 pt-8 px-5 relative w-full">
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative w-full">
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] not-italic p-0 relative text-[rgba(0,0,0,0.88)] text-center w-full">
                  <div
                    className="font-['SF_Pro_Text:Semibold',_sans-serif] min-w-full relative shrink-0 text-[24px]"
                    style={{ width: "min-content" }}
                  >
                    <p className="block leading-[32px]">05:00</p>
                  </div>
                  <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[14px] text-nowrap whitespace-pre">
                    <p className="block mb-0">Minutes remaining before your</p>
                    <p className="block">session times out</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#0047bb] h-8 relative rounded-md shrink-0"
                data-name="🧬 button"
              >
                <Button title="Yes, keep recording" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 