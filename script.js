function loadTimeTracker(timeframe = "weekly") {
    
    fetch('data.json') 
      .then(response => response.json()) 
      .then(data => {
        data.forEach(item => {
          const card = document.getElementById(item.title.toLowerCase());
  
          if (card) {
            card.querySelector(".title").textContent = item.title;
            card.querySelector(".hours").textContent = `${item.timeframes[timeframe].current}hrs`;
            card.querySelector(".previous").textContent = `Last week - ${item.timeframes[timeframe].previous}hrs`;
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
    }

  document.addEventListener("DOMContentLoaded", () => loadTimeTracker());
  
  document.querySelector(".daily").addEventListener("click", () => {
    loadTimeTracker('daily');
    toggleButtons('daily')
  })

  document.querySelector(".weekly").addEventListener("click", () => {
    loadTimeTracker('weekly');
    toggleButtons('weekly')
  })
  document.querySelector(".monthly").addEventListener("click", () => {
    loadTimeTracker('monthly');
    toggleButtons("monthly")
  })

  function toggleButtons(activeButton){
    const buttons = document.querySelectorAll('.sort div')

    buttons.forEach(button =>{
        if(button.classList.contains(activeButton)){
            button.classList.remove('inactive')
        } else{
            button.classList.add('inactive')
        }
    })
  }
  