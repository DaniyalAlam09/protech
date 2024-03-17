import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { HalfCircleSpinner } from 'react-epic-spinners';
import Popup from 'reactjs-popup';

function PublishedCases() {
    const navigate = useNavigate()
    const [casesList, setCasesList] = useState([]);
    const [selectedCaseBookmark, setSelectedCaseBookmark] = useState(null);
    const [showLoader, setShowLoader] = useState(false);
    const [selectedCaseId, setSelectedCaseId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isCollapse, setIsCollapse] = useState(false);
    const [deleteId, setDeleteId] = useState(null)
    const [sorting, setSorting] = useState({
        column: null,
        order: 'asc'
    });

    // Get_Cases_Listing
    useEffect(() => {

    }, []);

    // Handle_Bookmark_Case
    const handleBookmarkCaseClick = (caseId, bookmark) => {
        setSelectedCaseBookmark(bookmark);
        setSelectedCaseId(caseId);
        if (bookmark === 0) {
            setSelectedCaseBookmark(1);
        } else {
            setSelectedCaseBookmark(0);
        }
    };

    // Handle_Bookmark_Case
    const handleBookmarkCase = () => {

    };

    // Handle_Sort_Table_Data
    const handleSort = (columnName) => {

    };

    const isColumnSorted = (columnName) => {
        return sorting.column === columnName;
    };

    const handleSwitch = () => {
        setIsCollapse(!isCollapse)
    }
    // Handle_Delete_CASE
    const handleDeleteCase = () => {

    };

    return (
        <div className={`collapsibleWrap ${isCollapse ? 'open' : ''}`}>
            <button type="button" onClick={handleSwitch} className="collapseOppener btn btnPrimaryOutline">View Current Cases</button>
            <div className="collapseContent">
                <article className="widgetWrap">
                    <div className="widgetHeader">
                        <span>Current Cases (Post Op)</span>
                    </div>
                    <div className="tableWrap">
                        <table className="table fontSmall textCenter w100">
                            <thead>
                                <tr>
                                    <th>Ref</th>
                                    <th>Date <i className="icn fa-solid fa-caret-down"></i></th>
                                    <th>Consultant</th>
                                    <th>Procedure <i className="fa-regular fa-magnifying-glass"></i></th>
                                    <th>Status <i className="icn fa-solid fa-caret-down"></i></th>
                                    <th>Comments</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(casesList && (casesList?.length > 0)) ? casesList.map((data) => (
                                    <tr key={data.id} className={`${(data.bookmark == 1) ? 'bookmarked' : ''}`}>
                                        <td data-label="Ref" className='textCapitalize'>{data?.reference}</td>
                                        <td data-label="Date">{data?.procedure_date ? data?.procedure_date : '-'}</td>
                                        <td data-label="Consultant" className='textCapitalize'>{data?.consultant}</td>
                                        <td data-label="Procedure" className='textCapitalize'>{data?.procedure}</td>
                                        <td data-label="Status" className='textCapitalize'>{data?.status}</td>
                                        <td data-label="Comments">
                                            {data?.total_comments}
                                            {(data?.unread_count > 0) &&
                                                <span className="badgeNew">New<i className="icn fa-solid fa-message"></i></span>
                                            }
                                        </td>
                                        <td data-label="Actions">
                                            <div>

                                            </div>
                                        </td>
                                    </tr>
                                )) : loading ?
                                    <tr>
                                        <td colSpan={7}>Loading...</td>
                                    </tr> :
                                    <tr>
                                        <td colSpan={7}>No record found</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="widgetFooter">
                        <div className="textCenter">
                            <Link to="/cases-directory">View Case Directory</Link>
                        </div>
                    </div>
                </article>
            </div>

            {/* Bookmark_Case_Popup */}
            <Popup
                className="deleteUserModal"
                open={selectedCaseId !== null && selectedCaseBookmark !== null}
                onClose={() => {
                    setSelectedCaseId(null)
                    setSelectedCaseBookmark(null)
                }}
            >
                {selectedCaseId !== null && (
                    <div className="modal textCenter">
                        <p>Are you sure you want to {selectedCaseBookmark === 0 ? 'close bookmark on' : 'bookmark'}  this case?</p>
                        <div className="btnWrap">
                            <button
                                onClick={() => {
                                    setSelectedCaseId(null)
                                    setSelectedCaseBookmark(null)
                                }}
                                type="button"
                                className="btn btnSecondary"
                            >Cancel</button>
                            <button
                                onClick={handleBookmarkCase}
                                type="button"
                                className="btn btnPrimary"
                                disabled={showLoader}
                            >Confirm
                                {showLoader && (
                                    <HalfCircleSpinner
                                        size={18}
                                        style={{
                                            display: "inline-block",
                                            marginLeft: "7px",
                                            position: 'relative',
                                            top: '2px',
                                        }}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </Popup>

            {/* DELETE_Case_Popup */}
            <Popup
                className="deleteUserModal"
                open={deleteId !== null}
                onClose={() => {
                    setDeleteId(null)
                }}
            >
                {deleteId !== null && (
                    <div className="modal textCenter">
                        <p>Are you sure you want to Archive this case?</p>
                        <div className="btnWrap">
                            <button
                                onClick={() => {
                                    setDeleteId(null)
                                }}
                                type="button"
                                className="btn btnSecondary"
                            >No</button>
                            <button
                                onClick={handleDeleteCase}
                                type="button"
                                className="btn btnPrimary"
                                disabled={showLoader}
                            >Yes
                                {showLoader && (
                                    <HalfCircleSpinner
                                        size={18}
                                        style={{
                                            display: "inline-block",
                                            marginLeft: "7px",
                                            position: 'relative',
                                            top: '2px',
                                        }}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    )
}

export default PublishedCases