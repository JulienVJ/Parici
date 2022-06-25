import { Routes, Route } from 'react-router-dom';
import { SliderData } from "../components/SliderData";

const gpDescriptionContainer = () => {


    return(
        <Routes>
            <Route path=":gpCircuitName" element={<GpCircuitDescription data={SliderData} />} />
        </Routes>
    )
}
