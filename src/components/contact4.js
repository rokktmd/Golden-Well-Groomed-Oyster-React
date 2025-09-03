import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact4.css'

const Contact4 = (props) => {
  return (
    <div className="contact4-contact20 thq-section-padding">
      <div className="contact4-max-width thq-section-max-width">
        <div className="contact4-section-title">
          <span className="contact4-text1 thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact4-text7">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact4-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact4-text5">Contact us</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="contact4-row">
          <div className="contact4-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact4-contact-info1">
              <h3 className="contact4-text3 thq-heading-3">Email</h3>
              <a
                href="mailto:info@ktmd.si?subject=Contact"
                className="contact4-email thq-body-small"
              >
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact4-text6">info@ktmd.si</span>
                  </Fragment>
                )}
              </a>
              <div className="contact4-content3"></div>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="contact4-icon3"
            >
              <path
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                fill="currentColor"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <h3 className="contact4-text4 thq-heading-3">Facebook</h3>
          </div>
          <div className="contact4-container1">
            <div className="contact4-container2">
              <div className="contact4-content4">
                <div className="contact4-contact-info2">
                  <div className="contact4-content5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact4-container3">
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="contact4-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Contact4.defaultProps = {
  imageAlt4: 'image',
  imageSrc4:
    'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGNvbnRhY3R8ZW58MHx8fHwxNzU2OTIyMzMzfDA&ixlib=rb-4.1.0&h=400',
  heading1: undefined,
  email1: undefined,
  content2: undefined,
}

Contact4.propTypes = {
  imageAlt4: PropTypes.string,
  imageSrc4: PropTypes.string,
  heading1: PropTypes.element,
  email1: PropTypes.element,
  content2: PropTypes.element,
}

export default Contact4
