import React from "react";
import { Link } from "react-router-dom";

function Temperature() {
    const [data, setData] = React.useState([
        {
            tag: "tt01",
            value: "002",
            offset: "+02",
            alarmMin: "130",
            alarmMax: "120",
        },
    ]);
    const [loading, setLoading] = React.useState(false);

    return (
        <div className="dbContentWrap">
            <div className="tableWidget">
                <article className="widgetWrap">
                    <div className="widgetHeader">
                        <span>Temperature</span>
                    </div>
                    <div className="tableWrap">
                        <table className="table fontSmall textCenter w100">
                            <thead>
                                <tr>
                                    <th>Sr #</th>
                                    <th>Tag</th>
                                    <th>Value </th>
                                    <th>Offset</th>
                                    <th>AlarmMin</th>
                                    <th>AlarmMax</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data?.length > 0 ? (
                                    data.map((data, index) => (
                                        <tr
                                            key={data.id}
                                        >
                                            <td data-label="Tag" className="textCapitalize">
                                                {index + 1}
                                            </td>
                                            <td data-label="Tag" className="textCapitalize">
                                                {data?.tag}
                                            </td>
                                            <td data-label="Value">
                                                {data?.value ? data?.value : "-"}
                                            </td>
                                            <td data-label="Offset" className="textCapitalize">
                                                {data?.offset}
                                            </td>
                                            <td data-label="AlarmMin" className="textCapitalize">
                                                {data?.alarmMin}
                                            </td>
                                            <td data-label="AlarmMax" className="textCapitalize">
                                                {data?.alarmMax}
                                            </td>
                                        </tr>
                                    ))
                                ) : loading ? (
                                    <tr>
                                        <td colSpan={7}>Loading...</td>
                                    </tr>
                                ) : (
                                    <tr>
                                        <td colSpan={7}>No record found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="widgetFooter">
                        <div className="textCenter"></div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Temperature;
