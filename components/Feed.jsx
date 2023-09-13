"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const findSearchResult = (searchText) => {
    const searchTerm = RegExp(searchText, "i");
    return allPosts.filter(
      (item) =>
        searchTerm.test(item.creator.username) ||
        searchTerm.test(item.prompt) ||
        searchTerm.test(item.tag)
    );
  };

  const handleSearchChange = (searchQuery) => {
    setSearchText(searchQuery);

    const filteredPosts = findSearchResult(searchText);

    setSearchResults(filteredPosts);
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
    const filterPosts = findSearchResult(tag);
    setSearchResults(filterPosts);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setAllPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full justify-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <PromptCardList data={searchResults} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
