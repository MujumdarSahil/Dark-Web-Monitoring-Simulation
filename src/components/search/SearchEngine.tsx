import React, { useState, useEffect } from 'react';
import { Search, AlertCircle, Filter } from 'lucide-react';
import { searchResults } from '../../data/mockData';
import './SearchEngine.css';

type SearchCategory = 'all' | 'marketplace' | 'forum' | 'educational' | 'service' | 'data leak';

const SearchEngine: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('all');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setSearchQuery(searchTerm);
    
    // Add to search history if not already there
    if (!searchHistory.includes(searchTerm)) {
      setSearchHistory([searchTerm, ...searchHistory].slice(0, 10));
    }
    
    // Simulate search delay
    setTimeout(() => {
      const mockResults = searchResults[searchTerm.toLowerCase() as keyof typeof searchResults] || [];
      setResults(mockResults);
      setLoading(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  const filterResultsByCategory = (results: any[]) => {
    if (selectedCategory === 'all') return results;
    
    return results.filter(result => 
      result.category.toLowerCase() === selectedCategory
    );
  };
  
  const getSearchPlaceholder = () => {
    const suggestions = [
      "Try 'credentials'",
      "Search for 'ransomware'",
      "Look up 'zero-day'",
      "Find 'hacking' services"
    ];
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  };
  
  const handleHistoryItemClick = (term: string) => {
    setSearchTerm(term);
    setSearchQuery(term);
    
    setLoading(true);
    setTimeout(() => {
      const mockResults = searchResults[term.toLowerCase() as keyof typeof searchResults] || [];
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  };
  
  // Display a hint when first loading
  useEffect(() => {
    const hints = [
      "credentials",
      "ransomware",
      "zero-day",
      "hacking"
    ];
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    setSearchTerm(randomHint);
  }, []);
  
  const filteredResults = filterResultsByCategory(results);
  
  return (
    <div className="search-engine">
      <div className="search-header">
        <h2 className="search-title">Dark Web Search Engine</h2>
        <div className="search-subtitle">
          <AlertCircle size={16} />
          <span>Simulated environment - all results are fictional</span>
        </div>
      </div>
      
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder={getSearchPlaceholder()}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" onClick={handleSearch}>
            <Search size={20} />
          </button>
        </div>
        
        <div className="search-filters">
          <div className="filter-label">
            <Filter size={16} />
            <span>Filter:</span>
          </div>
          <div className="filter-options">
            <button 
              className={`filter-option ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            <button 
              className={`filter-option ${selectedCategory === 'marketplace' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('marketplace')}
            >
              Marketplace
            </button>
            <button 
              className={`filter-option ${selectedCategory === 'forum' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('forum')}
            >
              Forum
            </button>
            <button 
              className={`filter-option ${selectedCategory === 'service' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('service')}
            >
              Service
            </button>
            <button 
              className={`filter-option ${selectedCategory === 'data leak' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('data leak')}
            >
              Data Leak
            </button>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="search-loading">
          <div className="loading-animation">
            <div className="loading-bar"></div>
          </div>
          <div className="loading-text">
            <span className="terminal-text">Searching dark web for "{searchQuery}"...</span>
          </div>
        </div>
      ) : (
        <div className="search-results-container">
          {searchQuery && (
            <div className="search-results-header">
              <div className="results-info">
                Found <span className="results-count">{filteredResults.length}</span> results for "<span className="search-query">{searchQuery}</span>"
              </div>
              <div className="results-timestamp">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          )}
          
          <div className="search-results-grid">
            <div className="results-main">
              {filteredResults.length > 0 ? (
                <div className="results-list">
                  {filteredResults.map((result) => (
                    <div key={result.id} className="result-card">
                      <div className="result-header">
                        <div className="result-title-container">
                          <a href="#" className="result-url">{result.url}</a>
                          <h3 className="result-title">{result.title}</h3>
                        </div>
                        <div className="result-meta">
                          <span className={`result-category category-${result.category.toLowerCase().replace(' ', '-')}`}>
                            {result.category}
                          </span>
                          <span className="result-last-seen">Last seen: {result.lastSeen}</span>
                        </div>
                      </div>
                      
                      <p className="result-description">{result.description}</p>
                      
                      <div className="result-footer">
                        <div className="result-tags">
                          {result.tags.map((tag: string, index: number) => (
                            <span key={index} className="result-tag">#{tag}</span>
                          ))}
                        </div>
                        <div className="result-threat">
                          <span className="threat-label">Threat Score:</span>
                          <div className={`threat-score score-${Math.floor(result.threatScore / 25)}`}>
                            {result.threatScore}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="no-results">
                  <AlertCircle size={24} />
                  <p>No results found for "{searchQuery}"</p>
                  <p className="no-results-tip">Try searching for: "credentials", "ransomware", "zero-day", or "hacking"</p>
                </div>
              ) : null}
            </div>
            
            <div className="results-sidebar">
              <div className="search-history-container">
                <h3 className="sidebar-heading">Search History</h3>
                {searchHistory.length > 0 ? (
                  <ul className="search-history-list">
                    {searchHistory.map((term, index) => (
                      <li key={index} className="history-item">
                        <button
                          className="history-button"
                          onClick={() => handleHistoryItemClick(term)}
                        >
                          <Search size={14} />
                          <span>{term}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="sidebar-empty-message">No search history yet</p>
                )}
              </div>
              
              <div className="search-tips-container">
                <h3 className="sidebar-heading">Search Tips</h3>
                <ul className="search-tips-list">
                  <li>Try searching for types of threats like "ransomware"</li>
                  <li>Look for stolen data with terms like "credentials"</li>
                  <li>Search for exploits with "zero-day"</li>
                  <li>Find hacking services with "hacking"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchEngine;