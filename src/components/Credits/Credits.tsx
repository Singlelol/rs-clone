import './credits.scss';
import imageRsSchool from '../../images/rs_school_js.svg';

const creditsTitle = 'Над проектом работали:';
const authorH2 = 'Автор идеи:';
const programmerH2 = 'Программисты:';
const programmerOne = 'Кристина Хабибулина';
const programmerTwo = 'Виктория Горячкина';
const programmerThree = 'Салов Иван';
const programmerFour = 'Евгений';
const programmerOneLink = 'https://github.com/sinevit';
const programmerTwoLink = 'https://github.com/SosedovaViktoria';
const programmerThreeLink = 'https://github.com/Singlelol';
const programmerFourLink = 'https://github.com/YauhKaz';
const createdForRsSchool = 'Проект был создан для финального задания:';
const yearCreated = 'В феврале 2023года';
const codeLeaderH2 = 'Ведущий программист:';
const chiefDesignerH2 = 'Главный дизайнер:';
const testerH2 = 'Тестировщик:';
const mentorH2 = 'Ментор:';
const buttonText = 'Назад';
const returnBack = '/';

export const Credits = () => {
  return (
    <section className='credits'>
      <h2 className='credits_header'>{creditsTitle}</h2>
      <div className='credits_body'>
        <h3 className='credits_body_title'>{authorH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerThreeLink}>{programmerThree}</a>
        </div>
        <h3 className='credits_body_title'>{programmerH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerOneLink}>{programmerOne}</a>
        </div>
        <div className='credits_body_text'>
          <a href={programmerTwoLink}>{programmerTwo}</a>
        </div>
        <div className='credits_body_text'>
          <a href={programmerThreeLink}>{programmerThree}</a>
        </div>
        <h3 className='credits_body_title'>{codeLeaderH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerOneLink}>{programmerOne}</a>
        </div>
        <h3 className='credits_body_title'>{chiefDesignerH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerTwoLink}>{programmerTwo}</a>
        </div>
        <h3 className='credits_body_title'>{testerH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerThreeLink}>{programmerThree}</a>
        </div>
        <h3 className='credits_body_title'>{mentorH2}</h3>
        <div className='credits_body_text'>
          <a href={programmerFourLink}>{programmerFour}</a>
        </div>
        <div className='block_rs-school'>
          <h3 className='credits_rs_text'>{createdForRsSchool}</h3>
          <a className='image_rs-school' href='https://rs.school/js/'>
            <img src={imageRsSchool} alt='RS-School' />
          </a>
        </div>
        <h3 className='year_created_text'>{yearCreated}</h3>
        <button type='button' className='button'>
          <a href={returnBack}>{buttonText}</a>
        </button>
      </div>
    </section>
  );
};
