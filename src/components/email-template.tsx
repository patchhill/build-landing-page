import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  role: string;
  country: string;
  project: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
   firstName,
   lastName,
   email,
   phone,
   jobTitle,
   company,
   role,
   country,
   project,
}) => (
  <div>
    <div>
        firstName: {firstName}
    </div>
    <div>
        lastName: {lastName}
    </div>
    <div>
        email: {email}
    </div>
    <div>
        phone: {phone}
    </div>
    <div>
        jobTitle: {jobTitle}
    </div>
    <div>
        company: {company}
    </div>
    <div>
        role: {role}
    </div>
    <div>
        country: {country}
    </div>
    <div>
        project: {project}
    </div>
  </div>
);