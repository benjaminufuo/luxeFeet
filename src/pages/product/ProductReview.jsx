import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { ImReply } from "react-icons/im";

const ProductReview = () => {
  return (
    <div className='ProductReviewBody'>
        <div className="ProductReviewNav1">
        <h3>23 Reviews</h3>
        <div className="ProductReviewBox">
            <div className="ProductReviewImgBox">
                <div className="ProductReviewImgBoxs">
                    <img className='ImgBox' src="data:image/jpeg;base64,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" alt="" />
                </div>
            </div>
            <div className="ProductReviewTextBox">
                <div className="ProductReviewTextBox1">
                    <div className="ProductReviewTextBox1Text">
                        <h1>Jacob Webb</h1>
                        <h4>14 March 2018</h4>
                    </div>
                    <div className="ProductReviewTextBox1Text1">
                       <div className='ProductReviewTextBox1Text1Small'><FaStar/> <FaStar/> <FaStar/> <FaRegStarHalfStroke/> <CiStar/></div>
                       <div className="smallBox"><ImReply color='rgb(88, 88, 88)'/></div>
                    </div>
                </div>
                <div className="ProductReviewTextBox2">
                    <p>When she reached the first hills of the Italic Mountains, 
                        she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                </div>
            </div>
        </div>
        <div className="ProductReviewBox">
            <div className="ProductReviewImgBox">
            <div className="ProductReviewImgBoxs">
                    <img className='ImgBox' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EADkQAAIBAwMCBAQEBAUFAQAAAAECAwAEEQUSITFBBhNRYRQiMnEHgZGhI0Kx8FJiwdHhJDM0Q3IV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgICAwACAgMAAAAAAAAAAAECESExAxJBImETUQQyQv/aAAwDAQACEQMRAD8A81GPOB96feHbM2aYikyqPVhRL4Mbg49aT0PgFGYtnoKRDFjg05vpCvzXGk+XCgL9u9EAWOMN1YUNEKs2KGhPY0ZSSOODWCI4I+nn1NN3ELzSkLnr2p0A3KQwOe3FYwQszRrk8CmrjPNPwxg2BenJ9q7CAjfPjcPfNAIZrNvgRM2VDE7TjrjrVe4AOOfzqzvL6eWwgs92IoGLIAPWq5kzgscmigMEaeFOMgV1o9vKkc07JTHpRAPQkrnpSMzH5GYYznpzXXPy8dKApC59/Wloay3jd9sgVjt2bqrBK/mbixyOhq10i7RY5CVDPtPXkVVFw0hVlABPaljtjSeESGvFc5eMZx2FKojx4YjNKmwCw8CbrqNe+/FOuwRdyD0OKbanN4nqXol4uL2X/wCqHoPCFLndXADRvLLuQMUgu3jqaYAFRyRRVzjinMmxjmiQQszBQhLN0FBmFHBNPkRKWYfygZJrb+H/AMP/AIqGKXUb82pcZ8sKCSPQc8fnT9Og03wrpsd/qgSW+cbooEPzN7/b/aoSfiTqsd350MMSx8/wfLUg/c9TSW2USS2el23hLw5o9jHFJDLcvJ9CSyHLe3tTbrwB4Z1Cz2w2vwW0nbJExwfXr2rKRePW1ea0muBBblAVO8ZVG4wf3/Y16LeyXDaQk+jCC7gCjdCuNsg77T2NFOzNUeK+KfCOo6GxkYR3FpnCzQnI9sjqKyMilWznvXrd1PbxRteadJK1jKSk9lKSRG3cEdj7g/0rCeLNG+Cf4q3DfByH+Hk52n0JrRYJRM+GyaNG6r8rgMD+1AVfen7lUbSOacRD5F4GOhoRVV6nNPfBHXGKbLH8gYVjEvTCRI52koRioYG6UgZ4Jqy0BTJJLGO61HMEkcxDcL60l/Jodr4pkV0YsTSozyLu4pUQEjTU3askfbzKJcxGfUpweArHJomlQiPVssed7GpsNuj22o3EmdzMdo79ayzIz0UCj+K2Og4zRbaBZrjaR2zXNjkYCheO9dti0U3J/OiKiymsYkMIZ8lyoNaa/wBOtLSZLgFhbW1v50ikZyR0APuaotNso766SFJG81WGCehJ4wP3qx8YSyWFh/8AnM26SVgZH6fKDwPtSSzgpFemYmku9b1PcxzLMR1PCjso9AB2rdaL4At5o1N25Jxzt4rP/h7aLNq01xKD5cQA4Un9hXrmm3dlI/kxzAS4/wC24Kt+hpJyd0jo44JxtmP1D8PIZIdltKVH+YZrOKNY8BahHPZXkht3YedDk7JB7jpn3r2cIKyP4gWKzaWWCBiAecVPu0x/xxa0Uet6rbPLDfLGPhNUTZMU/lbs33GaoLO7KS3WlahzC7mNwedjdiPz5qFY3dy3hu4gifLW0gYAgE7DkHGf6iod1cOxhuBy5iCtz1K8f7V0JHK3QC8smsruS3ccocA4wD71XuPmNaTVSt9pkF6M4X5GzyQR2P8AfpWdfB5HrRixJKmd27iKkJDuiZSQO9AA4oluC7lc9RRYETNHRoXkmjcZCmo97LI0wYng0XTDsiuFYcYNOvrJ4reOXcrKfQ81P/Q+40VxAJzSruM0qoIXmmxrDf3Vw4yqBiM+tAgtby8tZrkNiJCSRnrUnVyLUPGh5c1HsZZWspLZZNqydu9JDORp4wVZbDE5JHrmrS2hWOwFycE5ORVdJblGZcHA65q0SHfp+ZG2oAcL60zFRM0SSR9ThNowixh3PACkdfl/1HrUHxHefH6nJKGZgeASc9BUmzZre3ubjaEKx7F49ev7f1qmbJkDN75/MUsd2UeIm+/DfT55NGup7VzHNI52t9hirZtI1aK6Ml7d/FQjbsjlwSp7nOOK7+Etwj6B5PR0lcfvmthfbcoDj5jyScYqL2dcP6oBd3TwaUroJPMK5GwZbpXmmv61coZbfUkvnCnCS/ENtOe+OB+1erXEYLwRkcAcHrWO8fWaHTJCyDKKSppFhjPKPOPDkpS4kgJUCYbcsByewpXEDWk0kBiyQ2QjZ+k+nIzUCEZd/UVdWt4l7H8PqOZMLiOQRgvHj3HOPUHPrXV6cL0LTWhkhurRiwSVc7BGBgg+x61Q3Ft5Erxhg2zrwRmr2zs5YZFkjw6r1kU/UKja5b5AuFAIzjcO4PY/nmsnUjNWrKy2Ma8vzXYXVbjIHGaEqZQ+tPiicMvHemehCcNsUErerVFMrS7gxz7VP1S3VYIyX2bscetRIooM8SHNTj+x2QA5GRilT5EUOQG4pVXAmS+8TRbZov8AMoJ/SqWNmVwUJyvIIqx1a5+I8qQg/RxUOyTMbSHHPAyM0nHoPJsYsjBXZyW9/enm4dokBY+2D0HeiNZyC2aTHAPPtmn6JbJeahGr4Cr8znHQCmvANssNUBg062tzwzfM3Pf+8D8qo5DjJ9OlWWtTia/fa25A20H7VVStnA/OkgsFZvJs/wALNSSC6ms3fa7ncue/Y1utc8QjTGjSbTZZ0YfLKrjB9ue9eH2txNZ3cVzbuUljYFSK9x8PanY61pyG6CLIy/Oj9PyqPMurs6v4vJF4ktC0jxXpmoXATyLiGUjC5iJz+nT86r/G90ZbJoyuMqf0q/uRpumQH4cQpn/BjmvNPHWryNb7FOwOce+KivlLqjp5ZcauUVSMrFhZ2weGGBTfMEV0u4ZRsZHWhWzEiMnr0p159YPp2ruR5L1ZfWU8drODIx8qTpGw6+4b/ep2rWzSW8km0vGwHAPf1qq0q4huLb4W4UfKd0bE8r9uP2q4MGLR4xNHkAdQentxSSxRSKtGZWO3iiLMxZweKDPOzBSOMdKLeQmFynJB5BqLN9Kj0plkmybq1wJbS1PVgOcUDS4zcSbAccdaDcEmFB2olg5hV3XgijVRNdsU9q6SkdaVEW4DqC5+au1si0FMTT2sWByBiogBhXryDjFW1kVFi2euP0qFpKQSX7Sakkr2UHzT+UDyOirntk4FCGXSNN+mu8KeFb/X7F57i6jsrNyNpdMs59hwAPc1oZfBmg+GNKuNQk1OaZwhOG2qG4OBgCsFdeLtVmBRJRFCrfw4o0ACDGABj0HFQr7Ur2605Rd3Dvl/kUt2xz+9XlBJE4ybZDZ9+GIxlicfc1Hflj7U9Cdgz2JoZ5lK+tSSKt2MxnBr0/wjGsunQk4zjGa8yBKtjANWNn4j1GxiENu0YUdMr/zUubjc1grw8ig8nq12saRszAYFeS+Jr34zUn2tmOM7Vol14m1W5jMb3CBTwQiCqdsnrQ4eHo7YebnU40g1q+Dj9Kk3nLE+9QEbYc1PlbzEyP8ADmrPDIrR2zkIcckY6EVoBHc3kYt1icyyDKhRnODzx9s1mYT/ABAD3q5069uYrwBJ9jR7sHdt2lhz+tBxthUmkNeMxefazAeZESoqpmBBwe1aHXnsfiIZLKfzLgKonGMgk981R6gmJQy/S1Fx6yoXt2jYfTLCXU7iG2ixlj1PYU+O2iimeJ9yxiTaxHJAzg0fwzfjT76OYjORs/WtZ4Q0K21TW9TiuQDHEOhI6k8mlbClkZpngOy1OyjvLS8doJMlCy84pVM0jW3062ktLW1MkEU8iowbjAY4pUOyAY60t55ozDAhd3XCgeuKDcahFDp8elWi7rQNvnkB2tPIO+SD8o7AihLqkltbtb22VZxh5M849B/r/ea0n5QPSq8aq2JJ26DIiSPtR2A9CMn9qG7M2EB4XgVxGwQRwexpycKXxyegosKRzO07e3pQm7H96J5Z8ssT0P5mmcMMZFKGx0n1mgP1p7MQ32ofVxmmQGEiheQEjBAGTyAcVx1XjFOlONqgDjvTSM4rAQwrR4HOAp5xyB6juKYeTXCD24IoNDILICpyvI6j3qVvzIJFJ2lRnHpUdD5ikfzDkCiQnAUH6Qdh+1KE0fhvVIbfzba9hiNrIeVKg496H4m0yG0bNmS1pIA8L9ceqk+o/piqjkHHTtV1pF9HPG+m6ixa3mOFbvG3YirtKcfshG4v6KG1QSKq5+pgB+tbPwFbSPc36+c6EjbkHmsze2M2kztFMhDKwKnBwwzwR7VZeHdUXTllllZsyeneuSaejpVFjp8bW0DQ5zskYZz15pVnTq0gZ/LOFLE0ql+OQ1oq7yZJ7qWWOMRo8hKoP5V7D9KCx4pdRzTGNdhCgsYBjbPXgUpHKrgd+B7V2LmLPvQ35IB9KAyCfEJtCtExAHaTH9QabhHBaEnAPIPUf8Vwx5FcjBSZT2zgj1B6imFGvyM9+9MTlxRWGMr/AISVz9jTYgN9BGYpOXxTq6ib5CewruODWYUMp4GePamd6KnagYbGSrAipBCg7h9Lc49PWgYG5R7E0SM/KVPY8fb+8UBkHVt4DflTidvzDqO9RYn2EoemeKJvLg46UydCNGhs9aub+0ksr9vPg2hIUK/NvzwQfXn96qr6B7V3hlGJI2KsPtQLeV7do5IWw6tkE9jVvdQHVdNju4lZrlQfMwfqx6++MH+xTyj2VrYifUo4lBXPvSrkZ2r2pVB2VVEYnmhMfmp+7iux7c5IzVBSTHH/AAv3NAblyfbipBbCffigyABh6Ut5HawEC/Ip9qUW0yAt9K/MfsP7x+ddXhKazbbeXA+ohf8AWmEAKSd2eSTk+9JOHpnSu5OQawSdAqrGfl5agkcflRIWyoNcJ3MMUGzIAR/Wnp9VcYcj9K6nUGgNQs/xR7Zz7UofmbHrTZflkfHen2yEkkelYDGSIyYUnOOjDuKSORFn3NGEW8FSeDUdx5OUJzzkGiAl/Sg74H6V2C4lWNVjlZFBzwe9RpHJGOgwM053XIKnJHPsKaLoV5LR7Z32uX8pmGSDxn3xSqt+Jk5IDvnq3qa7T/ASpEEHkVIRQcZrlKpsoHlAEYxQ5uopUqT0ox//AKxQ5v8Axl93NKlTkwFI9KVKsYlW/wBApw6r96VKlY0RqjMn50yLqfvSpVvBh045T7Gj2o/6aQ984pUqy0JMYhO6lOoKEkc0qVD0PhDQlyQ3QDFP+kkA4xXaVOKOaMZ6mlSpUTH/2Q==" alt="" />
                    
                    </div>
            </div>
            <div className="ProductReviewTextBox">
                <div className="ProductReviewTextBox1">
                    <div className="ProductReviewTextBox1Text">
                        <h1>Jacob Webb</h1>
                        <h4>14 March 2018</h4>
                    </div>
                    <div className="ProductReviewTextBox1Text1">
                       <div className='ProductReviewTextBox1Text1Small'><FaStar/> <FaStar/> <FaStar/> <FaRegStarHalfStroke/> <CiStar/></div>
                       <div className="smallBox"><ImReply color='rgb(88, 88, 88)'/></div>
                    </div>
                </div>
                <div className="ProductReviewTextBox2">
                    <p>When she reached the first hills of the Italic Mountains, 
                        she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                </div>
            </div>
        </div>
        <div className="ProductReviewBox">
            <div className="ProductReviewImgBox">
            <div className="ProductReviewImgBoxs">
                    <img className='ImgBox' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EADkQAAIBAwMCBAQEBAUFAQAAAAECAwAEEQUSITFBBhNRYRQiMnEHgZGhI0Kx8FJiwdHhJDM0Q3IV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgICAwACAgMAAAAAAAAAAAECESExAxJBImETUQQyQv/aAAwDAQACEQMRAD8A81GPOB96feHbM2aYikyqPVhRL4Mbg49aT0PgFGYtnoKRDFjg05vpCvzXGk+XCgL9u9EAWOMN1YUNEKs2KGhPY0ZSSOODWCI4I+nn1NN3ELzSkLnr2p0A3KQwOe3FYwQszRrk8CmrjPNPwxg2BenJ9q7CAjfPjcPfNAIZrNvgRM2VDE7TjrjrVe4AOOfzqzvL6eWwgs92IoGLIAPWq5kzgscmigMEaeFOMgV1o9vKkc07JTHpRAPQkrnpSMzH5GYYznpzXXPy8dKApC59/Wloay3jd9sgVjt2bqrBK/mbixyOhq10i7RY5CVDPtPXkVVFw0hVlABPaljtjSeESGvFc5eMZx2FKojx4YjNKmwCw8CbrqNe+/FOuwRdyD0OKbanN4nqXol4uL2X/wCqHoPCFLndXADRvLLuQMUgu3jqaYAFRyRRVzjinMmxjmiQQszBQhLN0FBmFHBNPkRKWYfygZJrb+H/AMP/AIqGKXUb82pcZ8sKCSPQc8fnT9Og03wrpsd/qgSW+cbooEPzN7/b/aoSfiTqsd350MMSx8/wfLUg/c9TSW2USS2el23hLw5o9jHFJDLcvJ9CSyHLe3tTbrwB4Z1Cz2w2vwW0nbJExwfXr2rKRePW1ea0muBBblAVO8ZVG4wf3/Y16LeyXDaQk+jCC7gCjdCuNsg77T2NFOzNUeK+KfCOo6GxkYR3FpnCzQnI9sjqKyMilWznvXrd1PbxRteadJK1jKSk9lKSRG3cEdj7g/0rCeLNG+Cf4q3DfByH+Hk52n0JrRYJRM+GyaNG6r8rgMD+1AVfen7lUbSOacRD5F4GOhoRVV6nNPfBHXGKbLH8gYVjEvTCRI52koRioYG6UgZ4Jqy0BTJJLGO61HMEkcxDcL60l/Jodr4pkV0YsTSozyLu4pUQEjTU3askfbzKJcxGfUpweArHJomlQiPVssed7GpsNuj22o3EmdzMdo79ayzIz0UCj+K2Og4zRbaBZrjaR2zXNjkYCheO9dti0U3J/OiKiymsYkMIZ8lyoNaa/wBOtLSZLgFhbW1v50ikZyR0APuaotNso766SFJG81WGCehJ4wP3qx8YSyWFh/8AnM26SVgZH6fKDwPtSSzgpFemYmku9b1PcxzLMR1PCjso9AB2rdaL4At5o1N25Jxzt4rP/h7aLNq01xKD5cQA4Un9hXrmm3dlI/kxzAS4/wC24Kt+hpJyd0jo44JxtmP1D8PIZIdltKVH+YZrOKNY8BahHPZXkht3YedDk7JB7jpn3r2cIKyP4gWKzaWWCBiAecVPu0x/xxa0Uet6rbPLDfLGPhNUTZMU/lbs33GaoLO7KS3WlahzC7mNwedjdiPz5qFY3dy3hu4gifLW0gYAgE7DkHGf6iod1cOxhuBy5iCtz1K8f7V0JHK3QC8smsruS3ccocA4wD71XuPmNaTVSt9pkF6M4X5GzyQR2P8AfpWdfB5HrRixJKmd27iKkJDuiZSQO9AA4oluC7lc9RRYETNHRoXkmjcZCmo97LI0wYng0XTDsiuFYcYNOvrJ4reOXcrKfQ81P/Q+40VxAJzSruM0qoIXmmxrDf3Vw4yqBiM+tAgtby8tZrkNiJCSRnrUnVyLUPGh5c1HsZZWspLZZNqydu9JDORp4wVZbDE5JHrmrS2hWOwFycE5ORVdJblGZcHA65q0SHfp+ZG2oAcL60zFRM0SSR9ThNowixh3PACkdfl/1HrUHxHefH6nJKGZgeASc9BUmzZre3ubjaEKx7F49ev7f1qmbJkDN75/MUsd2UeIm+/DfT55NGup7VzHNI52t9hirZtI1aK6Ml7d/FQjbsjlwSp7nOOK7+Etwj6B5PR0lcfvmthfbcoDj5jyScYqL2dcP6oBd3TwaUroJPMK5GwZbpXmmv61coZbfUkvnCnCS/ENtOe+OB+1erXEYLwRkcAcHrWO8fWaHTJCyDKKSppFhjPKPOPDkpS4kgJUCYbcsByewpXEDWk0kBiyQ2QjZ+k+nIzUCEZd/UVdWt4l7H8PqOZMLiOQRgvHj3HOPUHPrXV6cL0LTWhkhurRiwSVc7BGBgg+x61Q3Ft5Erxhg2zrwRmr2zs5YZFkjw6r1kU/UKja5b5AuFAIzjcO4PY/nmsnUjNWrKy2Ma8vzXYXVbjIHGaEqZQ+tPiicMvHemehCcNsUErerVFMrS7gxz7VP1S3VYIyX2bscetRIooM8SHNTj+x2QA5GRilT5EUOQG4pVXAmS+8TRbZov8AMoJ/SqWNmVwUJyvIIqx1a5+I8qQg/RxUOyTMbSHHPAyM0nHoPJsYsjBXZyW9/enm4dokBY+2D0HeiNZyC2aTHAPPtmn6JbJeahGr4Cr8znHQCmvANssNUBg062tzwzfM3Pf+8D8qo5DjJ9OlWWtTia/fa25A20H7VVStnA/OkgsFZvJs/wALNSSC6ms3fa7ncue/Y1utc8QjTGjSbTZZ0YfLKrjB9ue9eH2txNZ3cVzbuUljYFSK9x8PanY61pyG6CLIy/Oj9PyqPMurs6v4vJF4ktC0jxXpmoXATyLiGUjC5iJz+nT86r/G90ZbJoyuMqf0q/uRpumQH4cQpn/BjmvNPHWryNb7FOwOce+KivlLqjp5ZcauUVSMrFhZ2weGGBTfMEV0u4ZRsZHWhWzEiMnr0p159YPp2ruR5L1ZfWU8drODIx8qTpGw6+4b/ep2rWzSW8km0vGwHAPf1qq0q4huLb4W4UfKd0bE8r9uP2q4MGLR4xNHkAdQentxSSxRSKtGZWO3iiLMxZweKDPOzBSOMdKLeQmFynJB5BqLN9Kj0plkmybq1wJbS1PVgOcUDS4zcSbAccdaDcEmFB2olg5hV3XgijVRNdsU9q6SkdaVEW4DqC5+au1si0FMTT2sWByBiogBhXryDjFW1kVFi2euP0qFpKQSX7Sakkr2UHzT+UDyOirntk4FCGXSNN+mu8KeFb/X7F57i6jsrNyNpdMs59hwAPc1oZfBmg+GNKuNQk1OaZwhOG2qG4OBgCsFdeLtVmBRJRFCrfw4o0ACDGABj0HFQr7Ur2605Rd3Dvl/kUt2xz+9XlBJE4ybZDZ9+GIxlicfc1Hflj7U9Cdgz2JoZ5lK+tSSKt2MxnBr0/wjGsunQk4zjGa8yBKtjANWNn4j1GxiENu0YUdMr/zUubjc1grw8ig8nq12saRszAYFeS+Jr34zUn2tmOM7Vol14m1W5jMb3CBTwQiCqdsnrQ4eHo7YebnU40g1q+Dj9Kk3nLE+9QEbYc1PlbzEyP8ADmrPDIrR2zkIcckY6EVoBHc3kYt1icyyDKhRnODzx9s1mYT/ABAD3q5069uYrwBJ9jR7sHdt2lhz+tBxthUmkNeMxefazAeZESoqpmBBwe1aHXnsfiIZLKfzLgKonGMgk981R6gmJQy/S1Fx6yoXt2jYfTLCXU7iG2ixlj1PYU+O2iimeJ9yxiTaxHJAzg0fwzfjT76OYjORs/WtZ4Q0K21TW9TiuQDHEOhI6k8mlbClkZpngOy1OyjvLS8doJMlCy84pVM0jW3062ktLW1MkEU8iowbjAY4pUOyAY60t55ozDAhd3XCgeuKDcahFDp8elWi7rQNvnkB2tPIO+SD8o7AihLqkltbtb22VZxh5M849B/r/ea0n5QPSq8aq2JJ26DIiSPtR2A9CMn9qG7M2EB4XgVxGwQRwexpycKXxyegosKRzO07e3pQm7H96J5Z8ssT0P5mmcMMZFKGx0n1mgP1p7MQ32ofVxmmQGEiheQEjBAGTyAcVx1XjFOlONqgDjvTSM4rAQwrR4HOAp5xyB6juKYeTXCD24IoNDILICpyvI6j3qVvzIJFJ2lRnHpUdD5ikfzDkCiQnAUH6Qdh+1KE0fhvVIbfzba9hiNrIeVKg496H4m0yG0bNmS1pIA8L9ceqk+o/piqjkHHTtV1pF9HPG+m6ixa3mOFbvG3YirtKcfshG4v6KG1QSKq5+pgB+tbPwFbSPc36+c6EjbkHmsze2M2kztFMhDKwKnBwwzwR7VZeHdUXTllllZsyeneuSaejpVFjp8bW0DQ5zskYZz15pVnTq0gZ/LOFLE0ql+OQ1oq7yZJ7qWWOMRo8hKoP5V7D9KCx4pdRzTGNdhCgsYBjbPXgUpHKrgd+B7V2LmLPvQ35IB9KAyCfEJtCtExAHaTH9QabhHBaEnAPIPUf8Vwx5FcjBSZT2zgj1B6imFGvyM9+9MTlxRWGMr/AISVz9jTYgN9BGYpOXxTq6ib5CewruODWYUMp4GePamd6KnagYbGSrAipBCg7h9Lc49PWgYG5R7E0SM/KVPY8fb+8UBkHVt4DflTidvzDqO9RYn2EoemeKJvLg46UydCNGhs9aub+0ksr9vPg2hIUK/NvzwQfXn96qr6B7V3hlGJI2KsPtQLeV7do5IWw6tkE9jVvdQHVdNju4lZrlQfMwfqx6++MH+xTyj2VrYifUo4lBXPvSrkZ2r2pVB2VVEYnmhMfmp+7iux7c5IzVBSTHH/AAv3NAblyfbipBbCffigyABh6Ut5HawEC/Ip9qUW0yAt9K/MfsP7x+ddXhKazbbeXA+ohf8AWmEAKSd2eSTk+9JOHpnSu5OQawSdAqrGfl5agkcflRIWyoNcJ3MMUGzIAR/Wnp9VcYcj9K6nUGgNQs/xR7Zz7UofmbHrTZflkfHen2yEkkelYDGSIyYUnOOjDuKSORFn3NGEW8FSeDUdx5OUJzzkGiAl/Sg74H6V2C4lWNVjlZFBzwe9RpHJGOgwM053XIKnJHPsKaLoV5LR7Z32uX8pmGSDxn3xSqt+Jk5IDvnq3qa7T/ASpEEHkVIRQcZrlKpsoHlAEYxQ5uopUqT0ox//AKxQ5v8Axl93NKlTkwFI9KVKsYlW/wBApw6r96VKlY0RqjMn50yLqfvSpVvBh045T7Gj2o/6aQ984pUqy0JMYhO6lOoKEkc0qVD0PhDQlyQ3QDFP+kkA4xXaVOKOaMZ6mlSpUTH/2Q==" alt="" />
                    
                    </div>
            </div>
            <div className="ProductReviewTextBox">
                <div className="ProductReviewTextBox1">
                    <div className="ProductReviewTextBox1Text">
                        <h1>Jacob Webb</h1>
                        <h4>14 March 2018</h4>
                    </div>
                    <div className="ProductReviewTextBox1Text1">
                       <div className='ProductReviewTextBox1Text1Small'><FaStar/> <FaStar/> <FaStar/> <FaRegStarHalfStroke/> <CiStar/></div>
                       <div className="smallBox"><ImReply color='rgb(88, 88, 88)'/></div>
                    </div>
                </div>
                <div className="ProductReviewTextBox2">
                    <p>When she reached the first hills of the Italic Mountains, 
                        she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                </div>
            </div>
        </div>
        </div>

        <div className="ProductReviewNav2">
        <h1>Give a Review</h1>
        <div className="ProductReviewNav2Box">
            <div className="ProductReviewNav2BoxRows">
            <div><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> (98%)</div>
            <div className="Review">20 Reviews</div>
            </div>
            <div className="ProductReviewNav2BoxRows">
            <div><FaStar/> <FaStar/> <FaStar/> <FaStar/> <CiStar/> (85%)</div>
            <div className="Review">10 Reviews</div>
            </div>
            <div className="ProductReviewNav2BoxRows">
            <div><FaStar/> <FaStar/> <FaStar/> <CiStar/> <CiStar/> (70%)</div>
            <div className="Review">5 Reviews</div>
            </div>
            <div className="ProductReviewNav2BoxRows">
            <div><FaStar/> <FaStar/> <CiStar/> <CiStar/> <CiStar/> (10%)</div>
            <div className="Review">0 Reviews</div>
            </div>
            <div className="ProductReviewNav2BoxRows">
            <div><CiStar/> <CiStar/> <CiStar/> <CiStar/> <CiStar/> (0%)</div>
            <div className="Review">0 Reviews</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductReview