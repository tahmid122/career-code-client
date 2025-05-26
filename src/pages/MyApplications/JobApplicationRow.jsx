import React from "react";

const JobApplicationRow = ({ application, index }) => {
  const { linkedin, company, title, company_logo } = application;
  return (
    <tr>
      <td>#{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
    </tr>
  );
};

export default JobApplicationRow;
