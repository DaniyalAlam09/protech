import React from "react"

const Pagination = (props) => {
    const { pagination, handlePageClick } = props;

    return (
        <nav className="dFlex justifyCenter">
            <ul className="pagination">
                {pagination.links.map(link => (
                    <li
                        key={link.label}
                        className={`${link.active ? 'active' : ''} ${link.url == null ? 'disabled' : ''}`}
                        onClick={() => link.url && handlePageClick(
                            ((link.label === "&laquo; Previous") || (link.label === "Next &raquo;")) ? link.url.split('=')[1] : link.label
                        )}
                    >
                        <span>
                            {link.label === "&laquo; Previous" ? "Previous" : link.label === "Next &raquo;" ? "Next" : link.label}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;