import React, { useState, useEffect } from "react";
import { IconSearch } from '@tabler/icons-react';

export const Search = ({ results, onSubmit, onChange, value }) => {
  return (
    <div className="search-container">
      <form onSubmit={onSubmit}>
        <IconSearch />
        <input
          className="search"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search"
          results={results}
        />
      </form>
    </div>
  );
};
