import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import UCSBDiningCommonsMenuItemForm from "main/components/UCSBDiningCommonsMenuItem/UCSBDiningCommonsMenuItemForm";
import { Navigate } from 'react-router-dom'
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";

export default function UCSBDiningCommonsMenuItemCreatePage({storybook=false}) {

  const objectToAxiosParams = (ucsbDiningCommonsMenuItem) => ({
    url: "/api/ucsbdiningcommonsmenuitems/post",
    method: "POST",
    params: {
      name: ucsbDiningCommonsMenuItem.name,
      diningCommonsCode: ucsbDiningCommonsMenuItem.diningCommonsCode,
      station: ucsbDiningCommonsMenuItem.station
    }
  });

  const onSuccess = (ucsbDiningCommonsMenuItem) => {
    toast(`New UCSBDiningCommonsMenuItem Created - id: ${ucsbDiningCommonsMenuItem.id} name: ${ucsbDiningCommonsMenuItem.name} diningCommonsCode: ${ucsbDiningCommonsMenuItem.diningCommonsCode} station: ${ucsbDiningCommonsMenuItem.station}`);
  }

  const mutation = useBackendMutation(
    objectToAxiosParams,
     { onSuccess }, 
     // Stryker disable next-line all : hard to set up test for caching
     ["/api/ucsbdiningcommonsmenuitems/all"]
     );

  const { isSuccess } = mutation

  const onSubmit = async (data) => {
    mutation.mutate(data);
  }

  if (isSuccess && !storybook) {
    return <Navigate to="/ucsbdiningcommonsmenuitems" />
  }

  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Create New ucsbDiningCommonsMenuItem</h1>

        <UCSBDiningCommonsMenuItemForm submitAction={onSubmit} />

      </div>
    </BasicLayout>
  )
}