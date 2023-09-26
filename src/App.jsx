import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { PEOPLE } from "./data/people.js";
import { getImageUrl } from "./ultils/image.js";

function App() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ddd",
        }}
      >
        <Stack direction={"row"} gap={4} alignItems={"center"} marginBottom={2}>
          {" "}
          <Button variant="contained">Tăng</Button>
          <Typography>1</Typography>
          <Button variant="contained">Giảm</Button>
        </Stack>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5">Scientists</Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {PEOPLE.map((person) =>
                person.profession === "chemist" ? (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src={getImageUrl(person)}
                          onClick={() => console.log("handleClick!!!")}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={person.name}
                        secondary={
                          <>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {person.profession + " known for "}
                            </Typography>
                            {person.accomplishment}
                          </>
                        }
                      />
                    </ListItem>
                  </>
                ) : null
              )}
            </List>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;
