import React from "react";
import { Button as AntdButton } from "antd";
import * as Radix from "@radix-ui/react-slot";

// Custom Radix button styled to match Ant Design primary button
function RadixPrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-[#1677ff] hover:bg-[#4096ff] text-white font-medium rounded-md px-4 py-1.5 text-base border border-[#1677ff] shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4096ff] focus:ring-offset-2 disabled:bg-[#91caff] disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default function NewButtonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Button Comparison</h2>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-gray-700">Ant Design Primary</span>
          <AntdButton type="primary">AntD Primary</AntdButton>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-2 text-gray-700">Radix UI Styled</span>
          <RadixPrimaryButton>Radix Primary</RadixPrimaryButton>
        </div>
      </div>
    </div>
  );
} 