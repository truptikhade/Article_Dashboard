import { useState } from "react";
import filterCategories from "../config/filterConfig";

const Sidebar = ({ options={}, filters, setFilters }) => {
    const [openCategory,setOpenCategory] = useState({});
    const [openFilter,setOpenFilter] = useState({});
    const toggleCategory=(cat)=>{
        setOpenCategory(prev=>({
            ...prev,
            [cat]:!prev[cat]
        }));
    };
    const toggleFilter=(filter)=>{
        setOpenFilter(prev=>({
            ...prev,
            [filter]:!prev[filter]
        }));
    };
    const handleFilterChange=(key,value)=>{
        let arr = filters[key] || [];
        if(arr.includes(value)){
            arr = arr.filter(v=>v!==value);
        }else{
            arr=[...arr,value];
        }
        setFilters({...filters,[key]:arr});
    };
    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>All Filters</h2>
                <button className="clear-btn" onClick={()=>setFilters({})}>
                    Clear
                </button>
            </div>
            {filterCategories.map(category=>(
                    <div key={category.title}>
                        <div className="category-title" onClick={()=>toggleCategory(category.title)}>
                            <span>{category.title}</span>
                            <span>{openCategory[category.title] ? "-" : "+"}</span>
                        </div>
                        {openCategory[category.title] && (category.filters.map(filterKey=>(
                            <div key={filterKey}>
                                <div className="filter-title" onClick={()=>toggleFilter(filterKey)}>
                                    <span>{filterKey}</span>
                                    <span>{openFilter[filterKey] ? "-" : "+"}</span>
                                </div>
                                {openFilter[filterKey] && (options[filterKey]?.filter(v=>v && v!=="").map((value,i)=>(
                                    <div className="filter-item" key={i}>
                                        <input type="checkbox" checked={filters[filterKey]?.includes(value) || false} 
                                        onChange={()=>handleFilterChange(filterKey,value)}/>
                                        <label>{value}</label>
                                    </div>
                                    ))
                                )}
                            </div>
                            ))
                        )}
                    </div>
                ))
            }
        </div>
    );
};

export default Sidebar