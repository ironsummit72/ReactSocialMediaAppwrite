import { Alert, AlertDescription, AlertTitle } from '@/shadcomponents/ui/alert';


function AlertDialog({title,className, description,varient=''}) {
  return (
    <>
      <Alert className={className} title={title} description={description}varient={varient}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>
          {description}
        </AlertDescription>
      </Alert>
    </>
  );
}

export default AlertDialog;
