import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shadcomponents/ui/alert-dialog';


export default function CustomAlertDialog({
  title,
  description,
  onContinueHandler,className,open,onOpenChange,onCancelHandler
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}  >
      <AlertDialogContent className="bg-grey-500">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancelHandler} className="hover:bg-red-600 hover:text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-green-600 hover:text-white"
            onClick={onContinueHandler}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
