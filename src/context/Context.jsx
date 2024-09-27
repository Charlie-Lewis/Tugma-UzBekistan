import { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import Services from '../pages/Services/Services';
import Blog from '../pages/Blog/Blog';
import ContactMe from '../pages/ContactMe/ContactMe';
import Admin from '../pages/Admin/Admin';
import NewTestimonial from '../pages/NewTestimonial/NewTestimonial';
import ChangeTestimonial from '../pages/ChangeTestimonial/ChangeTestimonial';
import LogIn from '../pages/LogIn/LogIn';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isBurger, setIsBurger] = useState(false);
  const switchBurger = () => setIsBurger((prev) => !prev);

  // ----------------------------------------------------------

  const [isPopUp, setIsPopUp] = useState(false);
  const switchPopUp = () => setIsPopUp((prev) => !prev);

  // ----------------------------------------------------------

  const [skillId, setSkillId] = useState(1);
  const [popUpId, setPopUpId] = useState(null);

  // ----------------------------------------------------------

  const [selectedProject, setSelectedProject] = useState(null);

  // ----------------------------------------------------------

  const [isCounter, setIsCounter] = useState(false);

  // ----------------------------------------------------------

  const [testimonialsDataById, setTestimonialsDataById] = useState(null);

  // ----------------------------------------------------------

  const routePages = [
    { id: 1, path: '*', element: <PageNotFound /> },
    { id: 2, path: '/', element: <Home /> },
    { id: 3, path: '/about_me', element: <AboutMe /> },
    { id: 4, path: '/services', element: <Services /> },
    { id: 5, path: '/blog', element: <Blog /> },
    { id: 6, path: '/contact_me', element: <ContactMe /> },
    { id: 7, path: '/log_in', element: <LogIn /> },
  ];

  const adminPage = [
    { id: 1, path: '/admin', element: <Admin /> },
    { id: 2, path: '/admin/:id', element: <ChangeTestimonial /> },
    { id: 3, path: '/admin/new_testimonial', element: <NewTestimonial /> },
  ];

  // ----------------------------------------------------------

  const toastEmitter = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const notify = {
    success(message) {
      toast.success(message, toastEmitter);
    },

    error(message) {
      toast.error(message, toastEmitter);
    },
  };

  // ----------------------------------------------------------

  const urlServer = 'http://localhost:3000/';

  // ----------------------------------------------------------

  const [dataSkills, setDataSkills] = useState([]);

  const getDataSkills = async () => {
    try {
      const response = await axios.get(`${urlServer}skills`);

      setDataSkills(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------

  const [dataServices, setDataServices] = useState([]);

  const getDataServices = async () => {
    try {
      const response = await axios.get(`${urlServer}services`);

      setDataServices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------

  const [dataOurMilestones, setDataOurMilestones] = useState([]);

  const getDataOurMilestones = async () => {
    try {
      const response = await axios.get(`${urlServer}ourMilestones`);

      setDataOurMilestones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------

  const [dataOurProjects, setDataOurProjects] = useState([]);

  const getDataOurProjects = async () => {
    try {
      const response = await axios.get(`${urlServer}ourProjects`);

      setDataOurProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------

  const [dataTestimonials, setDataTestimonials] = useState([]);

  const getDataTestimonials = async () => {
    try {
      const response = await axios.get(`${urlServer}testimonials`);

      setDataTestimonials(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------

  const sendTelegramMessage = async (message) => {
    const sendMessage = `Name: ${message.inpName}
Email: ${message.inpEmail}
Title: ${message.inpTitle}
Description: ${message.textarea}`;

    const token = '7446885782:AAF8i2rKNUHINv4uW06bzwnKYXkUJIpS-Io';
    const chatId = '-4244449418';
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await axios.post(urlApi, {
        chat_id: chatId,
        text: sendMessage,
      });

      notify.success('Data send correctly');
    } catch (error) {
      notify.error('Data send incorrectly');
      console.log(error);
    }
  };

  // ----------------------------------------------------------

  const [adminData, setAdminData] = useState(null);

  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem('admin'))
  );

  const navigate = useNavigate();

  const getAdmin = async () => {
    try {
      const response = await axios.get(`${urlServer}admin`);

      setAdminData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkLogIn = (data) => {
    const admin = {
      username: adminData?.username,
      password: adminData?.password,
    };

    if (
      data.username === adminData?.username &&
      data.password === adminData?.password
    ) {
      notify.success('Data entered correctly');

      localStorage.setItem('admin', JSON.stringify(admin));

      setTimeout(() => {
        setIsAdmin(JSON.parse(localStorage.getItem('admin')));

        navigate('/admin');
      }, 2500);
    } else {
      notify.error('Data entered incorrectly');
      setIsAdmin(null);
      localStorage.clear();
    }
  };

  const logOut = () => {
    setIsAdmin(null);
    localStorage.clear();
    navigate('/');
  };

  const addTestimonialsData = async (data) => {
    const userData = {
      id: String(dataTestimonials + 1),
      src: '/user_none.png',
      alt: 'user_none',
      count: +data.inpNum,
      text: data.inpTextarea,
      title: data.inpFullName,
      subtitle: data.inpPosition,
    };

    try {
      await axios.post(`${urlServer}testimonials`, {
        ...userData,
      });

      notify.success('Data create correctly');
    } catch (error) {
      console.log(error);
      notify.error('Data incorectly');
    }
  };

  const validNum = {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^[0-9]*$/,
      message: 'Invalid number',
    },
    min: {
      value: 1,
      message: 'Min число это 1',
    },
    max: {
      value: 5,
      message: 'Max число это 5',
    },
  };

  const validFullName = {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /(^[A-Z]{1}[a-z]{2,16})([ ]{1})([A-Z]{1}[a-z]{2,16})?$/,
      message: 'Напишите имя правильно например TojiboevShakhzod',
    },
  };

  const validPosition = {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value:
        /(^[A-Z]{1}[a-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?/,
      message: 'Напишите правильную должность,Например Клиент',
    },
  };

  const deleteUserById = async (id) => {
    try {
      await axios.delete(`${urlServer}testimonials/${id}`);
      notify.success('Data deleted');
    } catch (error) {
      console.log(error);
      notify.error('Data not deleted');
    }
  };

  const getTestimonialsDataId = async (id) => {
    try {
      const response = await axios.get(`${urlServer}testimonials/${id}`);

      setTestimonialsDataById(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const putUserById = async (data, id) => {
    const userData = {
      src: '/user_none.png',
      alt: 'user_none',
      count: +data.inpNum,
      text: data.inpTextarea,
      title: data.inpFullName,
      subtitle: data.inpPosition,
    };

    try {
      await axios.put(`${urlServer}testimonials/${id}`, {
        id: id,
        ...userData,
      });
      notify.success('Data has not changed');
    } catch (error) {
      console.log(error);
      notify.error('Data has not changes');
    }
  };

  return (
    <Context.Provider
      value={{
        deleteUserById,
        validNum,
        validFullName,
        validPosition,
        logOut,
        getAdmin,
        isBurger,
        switchBurger,
        isPopUp,
        switchPopUp,
        skillId,
        setSkillId,
        popUpId,
        setPopUpId,
        selectedProject,
        setSelectedProject,
        getDataSkills,
        dataSkills,
        dataServices,
        getDataServices,
        dataOurMilestones,
        getDataOurMilestones,
        dataOurProjects,
        getDataOurProjects,
        dataTestimonials,
        getDataTestimonials,
        isCounter,
        setIsCounter,
        sendTelegramMessage,
        isAdmin,
        setIsAdmin,
        routePages,
        adminPage,
        checkLogIn,
        getAdmin,
        addTestimonialsData,
        testimonialsDataById,
        putUserById,
        getTestimonialsDataId,
      }}
    >
      {children}
    </Context.Provider>
  );
};
