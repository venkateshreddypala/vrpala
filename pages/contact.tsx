import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { contact } from 'config/contact';
import { InlineWidget } from 'react-calendly';
import { RoughNotation } from 'react-rough-notation';
import React from 'react';

function Contact() {
  const [isWidgetOpen, setWidgetOpen] = React.useState(false);
  const [randomColor] = useRandomColorPair();

  const onScheduleMeeting = () => {
    setWidgetOpen(true);
  };

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          <p>
            Do you have a project in mind? Want to hire me? or simply wanna
            chat? Feel free to
            <span
              className='ml-2 cursor-pointer !font-normal !text-black !no-underline dark:!text-white'
              onClick={onScheduleMeeting}
              role='button'
              tabIndex={0}
            >
              <RoughNotation
                show
                type='underline'
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
              >
                schedule a meeting
              </RoughNotation>
            </span>
          </p>
          {isWidgetOpen && <InlineWidget url={contact.calendly} />}
        </div>
      </div>
    </>
  );
}

export default Contact;
