import React, { useState } from "react";
import Vectorcareer from "../../assets/images/career/Vectorcareer.png";

function AccordionCareer() {
  const [activeItem, setActiveItem] = useState(null);

  const accordionItems = [
    {
      title: "We recognize and reward value creation",
      content:
        "We have short and long term incentive plans that we are proud of. Through this, employees can receive commissions and secure phantom share rights through a co-investment scheme",
    },
    {
      title: "You will work with the greatest minds!",
      content:
        "We seek global superior talent! We only work with the best because we are the best! Our core management team comprises talent with experience across education, strategy, finance, business, engineering, project management, legal and development having built hundreds of millions of dollars worth of businesses. Our advisory board comprises of diverse experienced professionals across various industries and represent or have represented high profile and prestigious institutions including Access Bank, Lafarge Africa, Globacom, University of Darussalam, British Council, Jaiz Bank, Kaduna Business School, Nigerian Sovereign Investment Authority, American University of Nigeria amongst others.",
    },
    {
      title: "We have a global mindset in our resourcing",
      content:
        "We seek global talent! We have opened offices in London, New York and Singapore, in addition to our office in Abuja. We believe talent can be found anywhere and we should tap into it. We source from all over the world. For instance, our trainers span across Adamawa, Gombe, Abuja, Lagos and Bauchi; with a growing base.",
    },
    {
      title: "Access to Tongston’s products and services",
      content:
        "Staff have access to Tongston’s products and services such as branding and marketing through Tongston Media; resources and courses through Tongston Institute and others. Staff are provided with discounts to provide their network. We will consider investing in your business through Tongston Ventures should it meet Tongston’s investment policy and go through our internal approval processes.",
    },
    {
      title: "You will be challenged!",
      content:
        "We are creating a revolution therefore expect to be challenged. Expect to learn, unlearn and re-learn. Expect to be pushed. We work with people with the right attitude for excellence in keeping with our core values - personal, socio-cultural, economic and sustainable development. We know that with the right attitude you can work continuously on your skills and knowledge.",
    },
    {
      title:
        "We recognize value creation through annual High Performance Employee Awards and informal recognitions",
      content:
        "We promote high performers creating value for the Organization, employees and themselves through our marketing materials, encouraging team members to interface with the outside world. We work with staff to undergo a transformative personal branding session to enhance their personal brand and image. Tongston is a reflection of its employees! So, it is important we focus on employees!",
    },
    {
      title:
        "We are lifelong learners through work based tasks and Tongston Entrepreneurial Academy",
      content:
        "Tongston Entrepreneurial Academy provides an opportunity for staff to continually learn and share. All new staff must go through as part of onboarding sessions including personal funding and finance, personal branding, sales and communication. Other sessions cover enterprise research and development, digital marketing, contracting and documentation and financial analysis. The Academy hosts sessions from third party partners and organizations such as Bright Network Academy, PURD Consulting, Coursera, Future Learn etc.",
    },
    {
      title: "We are intrapreneurs first",
      content:
        "To innovate, we must encourage open conversations, hiring diverse talent, and continually learning for each other. We dedicate Friday’s every week to Tongston Entrepreneurial Lab (T-Lab) to enhance our intrapreneurial and entrepreneurial ideas. So far, we have had product and services, team hangouts, staff masters thesis, recruitment process, staff catering and education consultancy businesses all presented and reviewed at T-Lab.",
    },
    {
      title: "We put flexibility first!",
      content:
        "We do not believe our team needs to sit in an office or be full time employees to deliver value. In fact, we want to learn from you - This is why we hire talent in a consultancy capacity so we can leverage on your continuous industry insights ; we encourage our staff to grow their own enterprises and/or volunteering engagements. We have a generous leave policy that accommodates fathers for paternity, sabbatical, study leave, casual and exam leave. You have 25 days of holiday a year (excl. Public and Bank Holidays, which you’re free to take whenever you want)",
    },
    {
      title: "You can wear multiple hats",
      content:
        "We believe the best form of learning is immersive! So we encourage staff to rotate across departments and group of companies. Tongston has a robust secondment policy which means you can hold multiple roles in Tongston across its group of companies! We have had staff hold roles for instance Tongston Holdings in the Business Development, Stakeholder Management and Strategy and Tongston Institute in the Curriculum Development, Resource Development & Training Faculty; or an administration team member also in the research and economics team.",
    },
    {
      title: "We have a robust Entrepreneurial Mentoring Scheme",
      content:
        "Staff can apply for an in-house Tongston entrepreneurial mentoring scheme. All new staff and interns are automatically assigned a buddy to support onboarding. Staff can also choose to apply to the Tongston Entrepreneurial mentoring program as mentees or mentors.",
    },
  ];

  return (
    <div className="career-vectormain-div">
      {accordionItems.map((item, index) => (
        <div key={index}>
          <div
            className="career-vector-title"
            onClick={() => setActiveItem(index === activeItem ? null : index)}
            style={{ cursor: "pointer" }}
          >
            <span className="career-vector-img">
              <img src={Vectorcareer} alt="Tongston" />
            </span>{" "}
            <h3 className="career-vector-h1">{item.title}</h3>
          </div>
          {activeItem === index && (
            <div className="career-vector-and-content">
              <span className="career-vector-img">
                <img src={Vectorcareer} alt="" />
              </span>
              <p className="career-vector-p">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default AccordionCareer;
