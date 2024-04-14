import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/shadcomponents/ui/alert-dialog';

export default function CustomAlertDialog({
  triggerChild,
  title,
  description,
  onContinueaHandler
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerChild}</AlertDialogTrigger>
      <AlertDialogContent className="bg-grey-500">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-red-600 hover:text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-green-600 hover:text-white"
            onClick={onContinueaHandler}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
