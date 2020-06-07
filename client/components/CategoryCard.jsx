import React from 'react';

const [seconds, setSeconds] = useState(0);
const [isActive, setIsActive] = useState(false);

function toggle() {
  setIsActive(!isActive);
}

function reset() {
  setSeconds(0);
  setIsActive(false);
}

useEffect(() => {
  let interval = null;
  if (isActive) {
    interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  } else if (!isActive && seconds !== 0) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [isActive, seconds]);

<button
  className={`button button-primary button-primary-${
    isActive ? 'active' : 'inactive'
  }`}
  onClick={toggle}
>
  {isActive ? 'Pause' : 'Start'}
</button>;

export default CategoryCard;
