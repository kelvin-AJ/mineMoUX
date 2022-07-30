const container = document.querySelector(".updates-container");
const optionsContainer = document.querySelector(".options-container");
const optionBtns = document.querySelectorAll(".primary-btn");

const operationsContent = `
<img src="bar.png" class="bar">
            <h3>Operations Tracker<img src="update.png"></h3>
            <div id="request-update" class="update">
                <h4>New Requests<button class="primary-btn" type="button">Manage</button></h4>
                <p>New requests from 4 companies and 1 individual. Companies include Magni...</p>
            </div>
            <div class="update">
                <h4>New Sites<button class="primary-btn" type="button">Manage</button></h4>
                <p>Several new sites have been discovered at Agbalumo, No mining permits till 2022.</p>
            </div>
            <div class="update">
                <h4>Last year's recorded turnover</h4>
                <p>Turnover profit for last year increased by 4%, equivalent to about 20 million Naira.</p>
            </div>
            
            <div class="update">
                <h4>Important Stuff</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem libero yapero ...</p>
            </div>
            <div class="update">
                <h4>Important Stuff</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem libero yapero ...</p>
            </div>`;
const revenueContent = `
<img src="bar.png" class="bar">
            <h3>Revenue Tracker<img src="update.png"></h3>
            <div class="tracker-main">
                <span>as at 29/07/2022: </span>
                <span>Total registered miners: <b>2,502</b></span>
                <span>Previous month registrations: <b>75</b></span>
                <span>Active miners: <b>2,087</b></span>
            </div>
            <div id="operators">
                <h4>Active Operators</h4>
                <table>
                    <thead>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Status</td>
                        <td>Expiry</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Femi Adebayo</td>
                            <td>femi@yahoo.com</td>
                            <td>Active</td>
                            <td>3 days away</td>
                        </tr>
                        <tr>
                            <td>Magnito Inc.</td>
                            <td>info@magnito.org</td>
                            <td>Active</td>
                            <td>20/09/2022</td>
                        </tr>
                        <tr>
                            <td>Kehinde Babalola</td>
                            <td>kennyb@gmail.com</td>
                            <td>Active</td>
                            <td>22/09/2022</td>
                        </tr>
                        <tr>
                            <td>Don lord</td>
                            <td>don123@gmail.com</td>
                            <td>Inactive</td>
                            <td>01/05/2022</td>
                        </tr>
                    </tbody>
                </table>
                <p class="more-btn">more...</p>
            </div>
            <br>
            <img src="bar.png" class="bar">
            
            <br>
            <div class="update">
                <h4>New Sites<button class="primary-btn" type="button">Manage</button></h4>
                <p>Several new sites have been discovered at Agbalumo, No mining permits till 2022.</p>
            </div>
            <div class="update">
                <h4>Last year's recorded turnover</h4>
                <p>Turnover profit for last year increased by 4%, equivalent to about 20 million Naira.</p>
            </div>
            
`;

container.innerHTML = operationsContent;

optionsContainer.addEventListener("click", function(e){
    if(!e.target.classList.contains("primary-btn")) return;
    const clicked = e.target;
    if(clicked.getAttribute("id") == "operations-btn"){
        container.innerHTML = operationsContent;
    }else if(clicked.getAttribute("id") == "revenue-btn"){
        container.innerHTML = revenueContent;
    }
    optionBtns.forEach(btn => btn.classList.remove("action-btn"));
    clicked.classList.add("action-btn");
})