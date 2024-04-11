import { Alert, AlertDescription, AlertTitle } from '@/shadcomponents/ui/alert';


function AlertDialog({title, description,varient=''}) {
  return (
    <>
      <Alert varient={varient}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>
          {description}
        </AlertDescription>
      </Alert>
    </>
  );
}

export default AlertDialog;
