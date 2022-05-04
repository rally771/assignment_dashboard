let candidateData;

let fetchData = new Promise((resolve, reject) => {
  fetch('db/candidate.json')
    .then(response => response.json())
    .then(data => {
      candidateData = data;
      resolve()
    });
});

async function testFunc() {
  await fetchData;
  for (const item of Object.entries(candidateData)) {
    // console.log(item)


    if (item[0] == "offerExtened") {
      // console.log(item[1].length);
    } else if (item[0] == "prospects") {
      for (i in item[1]) {
        console.log(item[1][i]);
        console.log(item[1][i].data.interviewSchedule.personOne.interviewDate);
        let personOneData, personTwoData, personThreeData, personFourData, personData;
        //personOne Data
        if (item[1][i].data.interviewSchedule.personOne.status == "complete") {
          if (item[1][i].data.interviewSchedule.personOne.hireStatus == "hired") {
            personOneData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-up"></i>
                              </div>
                              <div class="hiredTxt">
                                Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personOne.interviewDate}
                              </div>`;
          } else if (item[1][i].data.interviewSchedule.personOne.hireStatus == "AwaitingFeedBack") {
            personOneData = `
          Awaiting
          Feedback
          `
          } else if (item[1][i].data.interviewSchedule.personOne.hireStatus == "Undecided") {
            personOneData = `<div class="hired">
          <i class="fa fa-minus-circle" aria-hidden="true"></i>
                              </div>
                              <div class="hiredTxt">
                                Undecided
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personOne.interviewDate}
                              </div>`
          } else if (item[1][i].data.interviewSchedule.personOne.hireStatus == "rejected") {
            personOneData = `<div class="hired">
                               <i class="fa-solid fa-thumbs-down"></i>
                             </div>
                             <div class="hiredTxt">
                               No Hire
                             </div>
                             <div class="date">
                               ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                             </div>`
          }
        } else {
          personOneData = `
        <div class="hired">
        <i class="fa-solid fa-calendar"></i>

                            </div>
                            <div class="hiredTxt">
                              calendar
                            </div>
                            <div class="date">
                              ${item[1][i].data.interviewSchedule.personOne.interviewDate}
                            </div>
        `
        }


        //personTwo Data
        if (item[1][i].data.interviewSchedule.personTwo.status == "complete") {
          if (item[1][i].data.interviewSchedule.personTwo.hireStatus == "hired") {
            personTwoData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-up"></i>
                              </div>
                              <div class="hiredTxt">
                                Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personTwo.interviewDate}
                              </div>`;
          } else if (item[1][i].data.interviewSchedule.personTwo.hireStatus == "AwaitingFeedBack") {
            personTwoData = `
          Awaiting
          Feedback
          `
          } else if (item[1][i].data.interviewSchedule.personTwo.hireStatus == "Undecided") {
            personTwoData = `<div class="hired">
          <i class="fa fa-minus-circle" aria-hidden="true"></i>

                              </div>
                              <div class="hiredTxt">
                                Undecided
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personTwo.interviewDate}
                              </div>`
          } else if (item[1][i].data.interviewSchedule.personTwo.hireStatus == "rejected") {
            personTwoData = `<div class="hired">
                               <i class="fa-solid fa-thumbs-down"></i>
                             </div>
                             <div class="hiredTxt">
                               No Hire
                             </div>
                             <div class="date">
                               ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                             </div>`
          }
        } else {
          personTwoData = `
        <div class="hired">
        <i class="fa-solid fa-calendar"></i>

                            </div>
                            <div class="date">
                              ${item[1][i].data.interviewSchedule.personTwo.interviewDate}
                            </div>
        `
        }


        //personThree Data

        if (item[1][i].data.interviewSchedule.personThree.status == "complete") {
          if (item[1][i].data.interviewSchedule.personThree.hireStatus == "hired") {
            personThreeData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-up"></i>
                              </div>
                              <div class="hiredTxt">
                                Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                              </div>`;
          } else if (item[1][i].data.interviewSchedule.personThree.hireStatus == "AwaitingFeedBack") {
            personThreeData = `
          Awaiting
          Feedback
          `
          } else if (item[1][i].data.interviewSchedule.personThree.hireStatus == "Undecided") {
            personThreeData = `<div class="hired">
          <i class="fa fa-minus-circle" aria-hidden="true"></i>
                              </div>
                              <div class="hiredTxt">
                                Undecided
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                              </div>`
          } else if (item[1][i].data.interviewSchedule.personThree.hireStatus == "rejected") {
            personThreeData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-down"></i>
                              </div>
                              <div class="hiredTxt">
                                No Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                              </div>`
          }
        } else {
          personThreeData = `
        <div class="hired">
        <i class="fa-solid fa-calendar"></i>

                            </div>

                            <div class="date">
                              ${item[1][i].data.interviewSchedule.personOne.interviewDate}
                            </div>
        `
        }

        //personFour Data


        if (item[1][i].data.interviewSchedule.personFour.status == "complete") {
          if (item[1][i].data.interviewSchedule.personFour.hireStatus == "hired") {
            personFourData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-up"></i>
                              </div>
                              <div class="hiredTxt">
                                Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personFour.interviewDate}
                              </div>`;
          } else if (item[1][i].data.interviewSchedule.personFour.hireStatus == "AwaitingFeedBack") {
            personFourData = `
          Awaiting
          Feedback
          `
          } else if (item[1][i].data.interviewSchedule.personFour.hireStatus == "Undecided") {
            personFourData = `<div class="hired">
          <i class="fa fa-minus-circle" aria-hidden="true"></i>

                              </div>
                              <div class="hiredTxt">
                                Undecided
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personFour.interviewDate}
                              </div>`
          } else if (item[1][i].data.interviewSchedule.personFour.hireStatus == "rejected") {
            personFourData = `<div class="hired">
                               <i class="fa-solid fa-thumbs-down"></i>
                             </div>
                             <div class="hiredTxt">
                               No Hire
                             </div>
                             <div class="date">
                               ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                             </div>`
          }
        } else {
          personFourData = `
        <div class="hired">
        <i class="fa-solid fa-calendar"></i>

                            </div>

                            <div class="date">
                              ${item[1][i].data.interviewSchedule.personFour.interviewDate}
                            </div>
        `
        }


        let htmlData = `
        <div class="prospectContent row py-2 mx-4 ui-state-default ui-sortable-handle mb-3">
          <div class="col-1 imgSrc">
<img src="img/${item[1][i].name.split(" ")[0]}.png" alt="">
          </div>
          <div class="col-11">
            <div class="row">
              <div class="profileDetails  col-2 px-0">
                <div class="name fs16">
                  ${item[1][i].name}
                </div>
                <div class="position fs14">
                  ${item[1][i].designation}
                </div>
                <div class="location fs14">
                  ${item[1][i].location}
                </div>
              </div>
              <div class="col-5 interviewData">
                  <div class="row px-0">
                    <div class="col-3 personOne text-center px-0">
                        ${personOneData}
                    </div>
                    <div class="col-3 personOne text-center">
                    ${personTwoData}

                    </div>
                    <div class="col-3 personOne text-center">
                        ${personThreeData}
                    </div>
                    <div class="col-3 personOne text-center">
                        ${personFourData}
                    </div>
                  </div>
              </div>
              <div class="col-2 leadCap">
                <div class="row">
                  <div class="col-6 text-center">
                    ${item[1][i].data.leads}
                  </div>
                  <div class="col-6 text-center">
                  ${item[1][i].data.captured}
                  </div>
                </div>
              </div>
              <div class="col-3 fs12 comments">
                <div class="row">
                  <div class="col-11">
                    <textarea type="text" name="" value="" disabled>${item[1][i].data.comments}</textarea>
                  </div>
                  <div class="col-1 threedots" id="threeDot">
                    <p></p>
                    <p></p>
                    <p></p>
                    <div class="editCommentDropDown" id="editComment">
                      <ul>
                        <li>
                          edit comment
                        </li>
                        <li>
                          hide candidate
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`



        $(".prospectContainer").append(htmlData)
      }

    } else {
      for (i in item[1]) {
        console.log(item[1][i]);
        console.log(item[1][i].data.interviewSchedule.personOne.interviewDate);
        let personOneData, personTwoData, personThreeData, personFourData, personData;
        //personOne Data
        if (item[1][i].data.interviewSchedule.personOne.status == "complete") {
          if (item[1][i].data.interviewSchedule.personOne.hireStatus == "hired") {
            personOneData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-up"></i>
                              </div>
                              <div class="hiredTxt fs12">
                                Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personOne.interviewDate}
                              </div>`;
          } else if (item[1][i].data.interviewSchedule.personOne.hireStatus == "AwaitingFeedBack") {
            personOneData = `
            <div class="awaitingFeedback fs12">
            Awaiting
            Feedback
            </div>
          `
          } else if (item[1][i].data.interviewSchedule.personOne.hireStatus == "Undecided") {
            personOneData = `<div class="hired">
          <i class="fa fa-minus-circle" aria-hidden="true"></i>
                              </div>
                              <div class="hiredTxt fs12">
                                Undecided
                              </div>
                              <div class="date fs12">
                                ${item[1][i].data.interviewSchedule.personOne.interviewDate}
                              </div>`
          } else if (item[1][i].data.interviewSchedule.personOne.hireStatus == "rejected") {
            personOneData = `<div class="hired">
                               <i class="fa-solid fa-thumbs-down"></i>
                             </div>
                             <div class="hiredTxt fs12">
                               No Hire
                             </div>
                             <div class="date fs12">
                               ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                             </div>`
          }
        } else {
          personOneData = `
        <div class="hired">
        <i class="fa-solid fa-calendar"></i>

                            </div>
                            <div class="hiredTxt">
                              calendar
                            </div>
                            <div class="date">
                              ${item[1][i].data.interviewSchedule.personOne.interviewDate}
                            </div>
        `
        }


        //personTwo Data
        if (item[1][i].data.interviewSchedule.personTwo.status == "complete") {
          if (item[1][i].data.interviewSchedule.personTwo.hireStatus == "hired") {
            personTwoData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-up"></i>
                              </div>
                              <div class="hiredTxt">
                                Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personTwo.interviewDate}
                              </div>`;
          } else if (item[1][i].data.interviewSchedule.personTwo.hireStatus == "AwaitingFeedBack") {
            personTwoData = `
          Awaiting
          Feedback
          `
          } else if (item[1][i].data.interviewSchedule.personTwo.hireStatus == "Undecided") {
            personTwoData = `<div class="hired">
          <i class="fa fa-minus-circle" aria-hidden="true"></i>

                              </div>
                              <div class="hiredTxt">
                                Undecided
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personTwo.interviewDate}
                              </div>`
          } else if (item[1][i].data.interviewSchedule.personTwo.hireStatus == "rejected") {
            personTwoData = `<div class="hired">
                               <i class="fa-solid fa-thumbs-down"></i>
                             </div>
                             <div class="hiredTxt">
                               No Hire
                             </div>
                             <div class="date">
                               ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                             </div>`
          }
        } else {
          personTwoData = `
        <div class="hired">
        <i class="fa-solid fa-calendar"></i>
                            </div>
                            <div class="date">
                              ${item[1][i].data.interviewSchedule.personTwo.interviewDate}
                            </div>
        `
        }


        //personThree Data

        if (item[1][i].data.interviewSchedule.personThree.status == "complete") {
          if (item[1][i].data.interviewSchedule.personThree.hireStatus == "hired") {
            personThreeData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-up"></i>
                              </div>
                              <div class="hiredTxt">
                                Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                              </div>`;
          } else if (item[1][i].data.interviewSchedule.personThree.hireStatus == "AwaitingFeedBack") {
            personThreeData = `
          Awaiting
          Feedback
          `
          } else if (item[1][i].data.interviewSchedule.personThree.hireStatus == "Undecided") {
            personThreeData = `<div class="hired">
          <i class="fa fa-minus-circle" aria-hidden="true"></i>
                              </div>
                              <div class="hiredTxt">
                                Undecided
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                              </div>`
          } else if (item[1][i].data.interviewSchedule.personThree.hireStatus == "rejected") {
            personThreeData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-down"></i>
                              </div>
                              <div class="hiredTxt">
                                No Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                              </div>`
          }
        } else {
          personThreeData = `
        <div class="hired">
        <i class="fa-solid fa-calendar"></i>

                            </div>

                            <div class="date">
                              ${item[1][i].data.interviewSchedule.personOne.interviewDate}
                            </div>
        `
        }

        //personFour Data


        if (item[1][i].data.interviewSchedule.personFour.status == "complete") {
          if (item[1][i].data.interviewSchedule.personFour.hireStatus == "hired") {
            personFourData = `<div class="hired">
                                <i class="fa-solid fa-thumbs-up"></i>
                              </div>
                              <div class="hiredTxt">
                                Hire
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personFour.interviewDate}
                              </div>`;
          } else if (item[1][i].data.interviewSchedule.personFour.hireStatus == "AwaitingFeedBack") {
            personFourData = `
          Awaiting
          Feedback
          `
          } else if (item[1][i].data.interviewSchedule.personFour.hireStatus == "Undecided") {
            personFourData = `<div class="hired">
          <i class="fa fa-minus-circle" aria-hidden="true"></i>

                              </div>
                              <div class="hiredTxt">
                                Undecided
                              </div>
                              <div class="date">
                                ${item[1][i].data.interviewSchedule.personFour.interviewDate}
                              </div>`
          } else if (item[1][i].data.interviewSchedule.personFour.hireStatus == "rejected") {
            personFourData = `<div class="hired">
                               <i class="fa-solid fa-thumbs-down"></i>
                             </div>
                             <div class="hiredTxt">
                               No Hire
                             </div>
                             <div class="date">
                               ${item[1][i].data.interviewSchedule.personThree.interviewDate}
                             </div>`
          }
        } else {
          personFourData = `
        <div class="hired">
        <i class="fa-solid fa-calendar"></i>

                            </div>

                            <div class="date">
                              ${item[1][i].data.interviewSchedule.personFour.interviewDate}
                            </div>
        `
        }


        let htmlData = `
        <div class="prospectContent row py-2 mx-4 ui-state-default ui-sortable-handle mb-3">
          <div class="col-1 imgSrc">
              <img src="img/${item[1][i].name.split(" ")[0]}.png" alt="">
          </div>
          <div class="col-11">
            <div class="row">
              <div class="profileDetails  col-2 px-0">
                <div class="name fs16">
                  ${item[1][i].name}
                </div>
                <div class="position fs14">
                  ${item[1][i].designation}
                </div>
                <div class="location fs14">
                  ${item[1][i].location}
                </div>
              </div>
              <div class="col-5 interviewData">
                  <div class="row px-0">
                    <div class="col-3 personOne text-center px-0">
                        ${personOneData}
                    </div>
                    <div class="col-3 personOne text-center">
                    ${personTwoData}

                    </div>
                    <div class="col-3 personOne text-center">
                        ${personThreeData}
                    </div>
                    <div class="col-3 personOne text-center">
                        ${personFourData}
                    </div>
                  </div>
              </div>
              <div class="col-2 leadCap">
                <div class="row">
                  <div class="col-6 text-center fs18">
                    ${item[1][i].data.leads}
                  </div>
                  <div class="col-6 text-center fs18">
                  ${item[1][i].data.captured}
                  </div>
                </div>
              </div>
              <div class="col-3 fs12 comments">
                <div class="row">
                  <div class="col-11">
                  <textarea type="text" name="" value="" disabled>${item[1][i].data.comments}</textarea>

                  </div>
                  <div class="col-1 threedots" id="threeDot">
                    <p></p>
                    <p></p>
                    <p></p>
                    <div class="editCommentDropDown" id="editComment">
                      <ul>
                        <li>
                          edit comment
                        </li>
                        <li>
                          hide candidate
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`



        $(".dropContainer").append(htmlData)
      }
      // console.log(item[1].length);

    }
  }
  // console.log(candidateData);
}

testFunc()



//Function to reorder the
$(function() {
  $("#sortable").sortable();
});
setTimeout(function(){
  $(".threedots").on("click",function(e){
    $(".editCommentDropDown").hide();

    const threeDotDrop = $(".editCommentDropDown")[$(".threedots").index(this)];
    $(threeDotDrop).show();
    e.preventDefault();
  });
},500);

$(document).click(function(e){

console.log(e.target.parentNode.id)
  if(e.target.parentNode.id !="threeDot" && e.target.parentNode.id != "editCommentDropDown" && e.target.id !="threeDot" && e.target.id != "editCommentDropDown"){
    console.log("here")
    if($(".editCommentDropDown").is(":visible")){
      $(".editCommentDropDown").hide();
    }
  }
});
