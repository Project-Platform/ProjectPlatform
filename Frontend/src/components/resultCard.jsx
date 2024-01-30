import { Card, CardBody } from '@material-tailwind/react';

const ResultCard = ({ project }) => (
  <Card className="my-1">
    <CardBody>
        <strong>Title: </strong>{project.title}<br/>
        <strong>Author(s): </strong> {project.author.join(', ')}<br/>
        <strong>Domain: </strong>{project.domain.join(', ')}<br/>
        <strong>Abstract: </strong>{truncateText(project.abstract, 270)}<br/>
        <strong>Similarity Score: </strong>{Math.round((project.score)*100)}/100<br/>
    </CardBody>
  </Card>
);

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export default ResultCard;