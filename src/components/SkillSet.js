import React from 'react';

const SkillSet = () => (
  <div>
    <div className="rs-green-text rs-mt-20">Technical Skills</div>
    <table className="table table-bordered table-sm table-tech-stack">
      <tbody>

        <tr className="rs-tech-stack">
          <th scope="row" className="text-right">
            <code>Frontend</code>
          </th>
          <td>React, Next.js, Redux, Typescript, HTML5, CSS3/SCSS, Jest, React_Testing_Library</td>
        </tr>

        <tr className="rs-tech-stack">
          <th scope="row" className="text-right">
            <code>Backend</code>
          </th>
          <td>Node.js, Express, REST APIs, GraphQL, MongoDB, MySQL</td>
        </tr>

        <tr className="rs-tech-stack">
          <th scope="row" className="text-right">
            <code>DevOps/Tools</code>
          </th>
          <td>AWS, Azure, GCP, Docker, Jenkins, CI/CD, Git</td>
        </tr>

        <tr className="rs-tech-stack">
          <th scope="row" className="text-right">
            <code>Project Management</code>
          </th>
          <td>JIRA, Confluence, MS Project, Asana, Trello</td>
        </tr>

        <tr className="rs-tech-stack">
          <th scope="row" className="text-right">
            <code>Methodologies</code>
          </th>
          <td>Agile, Scrum, SAFe, Waterfall</td>
        </tr>

        <tr className="rs-tech-stack">
          <th scope="row" className="text-right">
            <code>Certifications</code>
          </th>
          <td>
            <div>- Scrum Master Professional ( <a className="rs-link" href="https://edu.gtf.pt/admin/tool/certificate/view.php?code=8908689991RM" target="blank">https://edu.gtf.pt/admin/tool/certificate/view.php?code=8908689991RM</a> )</div>
            <div>- Attention to Detail ( <a className="rs-link" href="https://www.testdome.com/certificates/ec6b8f4787a5405e85694c0c72d5f539" target="blank">https://www.testdome.com/certificates/ec6b8f4787a5405e85694c0c72d5f539</a> )</div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
);

export default SkillSet;
