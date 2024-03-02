import "../styles/Theme.css";

function ThemeSwitch({ theme, toggleTheme }) {
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className="theme-switch-container">
      <button
        aria-label={`Activate ${theme === "light" ? "dark" : "light"} mode`}
        title={`Activate ${theme === "light" ? "dark" : "light"} mode`}
        onClick={handleToggle}
        className="theme-switch"
      >
        <Icons theme={theme} />
      </button>
    </div>
  );
}

function Icons({ theme }) {
  return (
    <>
      {theme === "light" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="theme-icon"
        >
          <path d="M5.3414 0.703674C6.15522 0.271082 6.88493 1.28479 6.61346 2.16556C5.83713 4.68429 6.44565 7.53812 8.43904 9.5315C10.4324 11.5249 13.2863 12.1334 15.805 11.3571C16.6857 11.0856 17.6995 11.8153 17.2669 12.6291C16.866 13.3833 16.3479 14.0915 15.7125 14.7268C12.2694 18.17 6.68687 18.17 3.24369 14.7268C-0.19948 11.2837 -0.19948 5.70119 3.24369 2.25802C3.87905 1.62266 4.58724 1.10455 5.3414 0.703674Z" />
        </svg>
      ) : (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="theme-icon"
          color="white"
        >
          <path d="M16.5 11C16.5 14.0376 14.0376 16.5 11 16.5C7.96243 16.5 5.5 14.0376 5.5 11C5.5 7.96243 7.96243 5.5 11 5.5C14.0376 5.5 16.5 7.96243 16.5 11Z" />
          <path d="M10.0833 0.916666C10.0833 0.410406 10.4937 0 11 0C11.5063 0 11.9167 0.410406 11.9167 0.916666V1.83333C11.9167 2.33959 11.5063 2.75 11 2.75C10.4937 2.75 10.0833 2.33959 10.0833 1.83333V0.916666Z" />
          <path d="M10.0833 20.1667C10.0833 19.6604 10.4937 19.25 11 19.25C11.5063 19.25 11.9167 19.6604 11.9167 20.1667V21.0833C11.9167 21.5896 11.5063 22 11 22C10.4937 22 10.0833 21.5896 10.0833 21.0833V20.1667Z" />
          <path d="M21.0833 10.0833C21.5896 10.0833 22 10.4937 22 11C22 11.5063 21.5896 11.9167 21.0833 11.9167H20.1667C19.6604 11.9167 19.25 11.5063 19.25 11C19.25 10.4937 19.6604 10.0833 20.1667 10.0833H21.0833Z" />
          <path d="M1.83333 10.0833C2.33959 10.0833 2.75 10.4937 2.75 11C2.75 11.5063 2.33959 11.9167 1.83333 11.9167H0.916666C0.410406 11.9167 1.79394e-08 11.5063 4.00688e-08 11C6.21982e-08 10.4937 0.410406 10.0833 0.916666 10.0833H1.83333Z" />
          <path d="M17.4818 3.22183C17.8398 2.86385 18.4202 2.86385 18.7782 3.22183C19.1361 3.57981 19.1361 4.16021 18.7782 4.51819L18.13 5.16637C17.772 5.52435 17.1916 5.52435 16.8336 5.16637C16.4756 4.80839 16.4756 4.22799 16.8336 3.87001L17.4818 3.22183Z" />
          <path d="M3.87 16.8336C4.22798 16.4757 4.80838 16.4757 5.16636 16.8336C5.52434 17.1916 5.52434 17.772 5.16636 18.13L4.51818 18.7782C4.1602 19.1362 3.5798 19.1362 3.22182 18.7782C2.86384 18.4202 2.86384 17.8398 3.22182 17.4818L3.87 16.8336Z" />
          <path d="M18.7782 17.4818C19.1362 17.8398 19.1362 18.4202 18.7782 18.7782C18.4202 19.1362 17.8398 19.1362 17.4818 18.7782L16.8336 18.13C16.4756 17.772 16.4756 17.1916 16.8336 16.8337C17.1916 16.4757 17.772 16.4757 18.13 16.8337L18.7782 17.4818Z" />
          <path d="M5.16636 3.87003C5.52434 4.22801 5.52434 4.80841 5.16636 5.16639C4.80838 5.52437 4.22798 5.52437 3.87 5.16639L3.22182 4.51821C2.86384 4.16023 2.86384 3.57983 3.22182 3.22185C3.5798 2.86387 4.1602 2.86387 4.51818 3.22185L5.16636 3.87003Z" />
        </svg>
      )}
    </>
  );
}

export default ThemeSwitch;
