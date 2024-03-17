import React, { useState } from "react";
import DatePicker from "react-date-picker";
import Charts from "./charts";

const FilterComponent = ({ filterDates, setFilterDates, items }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCheckboxChange = (itemId) => {
        const updatedItems = selectedItems.includes(itemId)
            ? selectedItems.filter((id) => id !== itemId)
            : [...selectedItems, itemId];
        setSelectedItems(updatedItems);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleSearch = () => {
        // Handle search logic here
    };

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (

        <div className="filter-container">
            <div className="filter-section">
                <div className="date-picker-container">
                    To:{" "}
                    <DatePicker
                        onChange={(value) => setFilterDates(value)}
                        value={filterDates}
                    />
                    From:{" "}
                    <DatePicker
                        onChange={(value) => setFilterDates(value)}
                        value={filterDates}
                    />
                </div>
            </div>
            <div className="filter-section">
                <button className="dropdown-button" onClick={handleDropdownClick}>
                    {" "}
                    Select Tags to search <i class="fa-solid fa-sort-down"></i>
                </button>
                {showDropdown && (
                    <div className="dropdown-content">
                        {items.map((item) => (
                            <div key={item.id}>
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                                <label htmlFor={item.id}>{item.name}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="filter-section">
                <div className="value-container">
                    <select value={selectedType} onChange={handleTypeChange}>
                        <option value="pressure">Pressure</option>
                        <option value="temp">Temperature</option>
                    </select>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <i className="fa-solid fa-sort-down dropdown-icon"></i>

                </div>
            </div>


            <button className="search-button" onClick={handleSearch}>
                Search <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    );
};

const YourComponent = () => {
    const [filterDates, setFilterDates] = useState(new Date());
    // Assuming items array is passed as props or fetched from somewhere
    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ];

    return (
        <div className="statsWidget statsChartWidget colSpan100" style={{ minHeight: '293px' }}>
            <article className="widgetWrap" >
                <div className="widgetHeader">
                    <span>Seach Filter</span>
                </div>
                <div className="widgetBody">
                    <FilterComponent
                        filterDates={filterDates}
                        setFilterDates={setFilterDates}
                        items={items}
                    />
                </div>
            </article>
            <Charts />
        </div>
    );
};

export default YourComponent;
