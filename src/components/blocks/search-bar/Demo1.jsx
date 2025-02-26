// src/components/blocks/search-bar/SearchComponentDemo.jsx

import React from "react";
import { SearchComponent } from "@/components/blocks/search-bar/SearchComponent";

export const DemoVariant1 = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f7f7f7" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Search Component Demo</h1>
      <SearchComponent />
    </div>
  );
};

export const DemoVariant2 = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#e0f7fa" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Search Component with Different Background</h1>
      <SearchComponent />
    </div>
  );
};

// Export both demo variants for 21st.dev
export { DemoVariant1, DemoVariant2 };
